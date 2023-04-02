package main

import (
	"bytes"
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/render"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(render.SetContentType(render.ContentTypeJSON))
	fs := http.FileServer(http.Dir("static"))
	fmt.Print("BLOCKY STARTED")
	r.Handle("/static/*", http.StripPrefix("/static/", fs))

	r.Get("/ping", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("pong"))
	})

	r.Post("/execute", func(w http.ResponseWriter, r *http.Request) {
		fmt.Print("EXECUTE THE JS IN DOCKER CONTAINER")
		var req struct {
			JSCode string `json:"js_code"`
		}

		if err := render.DecodeJSON(r.Body, &req); err != nil {
			render.Render(w, r, ErrBadRequest(err))
			return
		}

		// Write the JavaScript code to a temporary file
		file, err := ioutil.TempFile(os.TempDir(), "js*.js")
		if err != nil {
			render.Render(w, r, ErrInternalServer(err))
			return
		}
		defer os.Remove(file.Name())
		if _, err := file.Write([]byte(req.JSCode)); err != nil {
			render.Render(w, r, ErrInternalServer(err))
			return
		}
		if err := file.Close(); err != nil {
			render.Render(w, r, ErrInternalServer(err))
			return
		}

		// Run the JavaScript code in a Node.js Docker container
		ctx := context.Background()
		cmd := exec.CommandContext(ctx, "docker", "run", "--rm", "-i", "node:latest")
		cmd.Stdin = bytes.NewReader([]byte(fmt.Sprintf(`console.log(require("fs").readFileSync("%s", "utf8"))`, file.Name())))
		var stdout bytes.Buffer
		cmd.Stdout = &stdout
		if err := cmd.Run(); err != nil {
			render.Render(w, r, ErrInternalServer(err))
			return
		}

		// Return the output from the Docker container
		render.JSON(w, r, map[string]string{"output": stdout.String()})
	})

	log.Fatal(http.ListenAndServe(":8080", r))
}

func ErrBadRequest(err error) render.Renderer {
	return &ErrResponse{
		HTTPStatusCode: http.StatusBadRequest,
		StatusText:     err.Error(),
	}
}

func ErrInternalServer(err error) render.Renderer {
	return &ErrResponse{
		HTTPStatusCode: http.StatusInternalServerError,
		StatusText:     "Internal Server Error",
		ErrorText:      err.Error(),
	}
}

type ErrResponse struct {
	HTTPStatusCode int    `json:"-"`
	StatusText     string `json:"status"`
	ErrorText      string `json:"error,omitempty"`
}

func (e *ErrResponse) Render(w http.ResponseWriter, r *http.Request) error {
	render.Status(r, e.HTTPStatusCode)
	return nil
}
