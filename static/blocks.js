const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "categorystyle": "logic_category",
            "contents": [
                {
                    "kind": "category",
                    "name": "If",
                    "contents": [
                        {
                            "kind": "block",
                            "type": "controls_if"
                        },
                        {
                            "kind": "block",
                            "type": "controls_if",
                            "extraState": {
                                "hasElse": "true"
                            }
                        },
                        {
                            "kind": "block",
                            "type": "controls_if",
                            "extraState": {
                                "hasElse": "true",
                                "elseIfCount": 1
                            }
                        }
                    ]
                },
                {
                    "kind": "category",
                    "name": "Boolean",
                    "categorystyle": "logic_category",
                    "contents": [
                        {
                            "kind": "block",
                            "type": "logic_compare"
                        },
                        {
                            "kind": "block",
                            "type": "logic_operation"
                        },
                        {
                            "kind": "block",
                            "type": "logic_negate"
                        },
                        {
                            "kind": "block",
                            "type": "logic_boolean"
                        },
                        {
                            "kind": "block",
                            "type": "logic_null"
                        },
                        {
                            "kind": "block",
                            "type": "logic_ternary"
                        }
                    ]
                }
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "categorystyle": "loop_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_repeat_ext",
                    "inputs": {
                        "TIMES": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 10
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                },
                {
                    "kind": "block",
                    "type": "controls_for",
                    "fields": {
                        "VAR": "i"
                    },
                    "inputs": {
                        "FROM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                        "TO": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 10
                                }
                            }
                        },
                        "BY": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "controls_forEach"
                },
                {
                    "kind": "block",
                    "type": "controls_flow_statements"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "categorystyle": "math_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "math_number",
                    "fields": {
                        "NUM": 123
                    }
                },
                {
                    "kind": "block",
                    "type": "math_arithmetic",
                    "fields": {
                        "OP": "ADD"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_single",
                    "fields": {
                        "OP": "ROOT"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_trig",
                    "fields": {
                        "OP": "SIN"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_constant",
                    "fields": {
                        "CONSTANT": "PI"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_number_property",
                    "extraState": "<mutation divisor_input=\"false\"></mutation>",
                    "fields": {
                        "PROPERTY": "EVEN"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_round",
                    "fields": {
                        "OP": "ROUND"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_on_list",
                    "extraState": "<mutation op=\"SUM\"></mutation>",
                    "fields": {
                        "OP": "SUM"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_modulo"
                },
                {
                    "kind": "block",
                    "type": "math_constrain",
                    "inputs": {
                        "LOW": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                        "HIGH": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 100
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "math_random_int",
                    "inputs": {
                        "FROM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                        "TO": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 100
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "math_random_float"
                },
                {
                    "kind": "block",
                    "type": "math_atan2"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Lists",
            "categorystyle": "list_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "lists_create_empty"
                },
                {
                    "kind": "block",
                    "type": "lists_create_with",
                    "extraState": {
                        "itemCount": 3
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_repeat",
                    "inputs": {
                        "NUM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 5
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_length"
                },
                {
                    "kind": "block",
                    "type": "lists_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "lists_indexOf",
                    "fields": {
                        "END": "FIRST"
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_getIndex",
                    "fields": {
                        "MODE": "GET",
                        "WHERE": "FROM_START"
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_setIndex",
                    "fields": {
                        "MODE": "SET",
                        "WHERE": "FROM_START"
                    }
                }
            ]
        },
        {
            "kind": "sep"
        },
        {
            "kind": "category",
            "name": "Variables",
            "categorystyle": "variable_category",
            "custom": "VARIABLE"
        },
        {
            "kind": "category",
            "name": "Functions",
            "categorystyle": "procedure_category",
            "custom": "PROCEDURE"
        },
        {
            "kind": "category",
            "name": "Library",
            "expanded": "true",
            "contents": [
                {
                    "kind": "category",
                    "name": "Randomize",
                    "contents": [
                        {
                            "kind": "block",
                            "type": "procedures_defnoreturn",
                            "extraState": {
                                "params": [
                                    {
                                        "name": "list"
                                    }
                                ]
                            },
                            "icons": {
                                "comment": {
                                    "text": "Describe this function...",
                                    "pinned": false,
                                    "height": 80,
                                    "width": 160
                                }
                            },
                            "fields": {
                                "NAME": "randomize"
                            },
                            "inputs": {
                                "STACK": {
                                    "block": {
                                        "type": "controls_for",
                                        "fields": {
                                            "VAR": {
                                                "name": "x"
                                            }
                                        },
                                        "inputs": {
                                            "FROM": {
                                                "block": {
                                                    "type": "math_number",
                                                    "fields": {
                                                        "NUM": 1
                                                    }
                                                }
                                            },
                                            "TO": {
                                                "block": {
                                                    "type": "lists_length",
                                                    "inline": false,
                                                    "inputs": {
                                                        "VALUE": {
                                                            "block": {
                                                                "type": "variables_get",
                                                                "fields": {
                                                                    "VAR": {
                                                                        "name": "list"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "BY": {
                                                "block": {
                                                    "type": "math_number",
                                                    "fields": {
                                                        "NUM": 1
                                                    }
                                                }
                                            },
                                            "DO": {
                                                "block": {
                                                    "type": "variables_set",
                                                    "inline": false,
                                                    "fields": {
                                                        "VAR": {
                                                            "name": "y"
                                                        }
                                                    },
                                                    "inputs": {
                                                        "VALUE": {
                                                            "block": {
                                                                "type": "math_random_int",
                                                                "inputs": {
                                                                    "FROM": {
                                                                        "block": {
                                                                            "type": "math_number",
                                                                            "fields": {
                                                                                "NUM": 1
                                                                            }
                                                                        }
                                                                    },
                                                                    "TO": {
                                                                        "block": {
                                                                            "type": "lists_length",
                                                                            "inline": false,
                                                                            "inputs": {
                                                                                "VALUE": {
                                                                                    "block": {
                                                                                        "type": "variables_get",
                                                                                        "fields": {
                                                                                            "VAR": {
                                                                                                "name": "list"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "next": {
                                                        "block": {
                                                            "type": "variables_set",
                                                            "inline": false,
                                                            "fields": {
                                                                "VAR": {
                                                                    "name": "temp"
                                                                }
                                                            },
                                                            "inputs": {
                                                                "VALUE": {
                                                                    "block": {
                                                                        "type": "lists_getIndex",
                                                                        "fields": {
                                                                            "MODE": "GET",
                                                                            "WHERE": "FROM_START"
                                                                        },
                                                                        "inputs": {
                                                                            "VALUE": {
                                                                                "block": {
                                                                                    "type": "variables_get",
                                                                                    "fields": {
                                                                                        "VAR": {
                                                                                            "name": "list"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            },
                                                                            "AT": {
                                                                                "block": {
                                                                                    "type": "variables_get",
                                                                                    "fields": {
                                                                                        "VAR": {
                                                                                            "name": "y"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "next": {
                                                                "block": {
                                                                    "type": "lists_setIndex",
                                                                    "inline": false,
                                                                    "fields": {
                                                                        "MODE": "SET",
                                                                        "WHERE": "FROM_START"
                                                                    },
                                                                    "inputs": {
                                                                        "LIST": {
                                                                            "block": {
                                                                                "type": "variables_get",
                                                                                "fields": {
                                                                                    "VAR": {
                                                                                        "name": "list"
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        "AT": {
                                                                            "block": {
                                                                                "type": "variables_get",
                                                                                "fields": {
                                                                                    "VAR": {
                                                                                        "name": "y"
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        "TO": {
                                                                            "block": {
                                                                                "type": "lists_getIndex",
                                                                                "fields": {
                                                                                    "MODE": "GET",
                                                                                    "WHERE": "FROM_START"
                                                                                },
                                                                                "inputs": {
                                                                                    "VALUE": {
                                                                                        "block": {
                                                                                            "type": "variables_get",
                                                                                            "fields": {
                                                                                                "VAR": {
                                                                                                    "name": "list"
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "AT": {
                                                                                        "block": {
                                                                                            "type": "variables_get",
                                                                                            "fields": {
                                                                                                "VAR": {
                                                                                                    "name": "x"
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "next": {
                                                                        "block": {
                                                                            "type": "lists_setIndex",
                                                                            "inline": false,
                                                                            "fields": {
                                                                                "MODE": "SET",
                                                                                "WHERE": "FROM_START"
                                                                            },
                                                                            "inputs": {
                                                                                "LIST": {
                                                                                    "block": {
                                                                                        "type": "variables_get",
                                                                                        "fields": {
                                                                                            "VAR": {
                                                                                                "name": "list"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "AT": {
                                                                                    "block": {
                                                                                        "type": "variables_get",
                                                                                        "fields": {
                                                                                            "VAR": {
                                                                                                "name": "x"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "TO": {
                                                                                    "block": {
                                                                                        "type": "variables_get",
                                                                                        "fields": {
                                                                                            "VAR": {
                                                                                                "name": "temp"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    "kind": "category",
                    "name": "Jabberwocky",
                    "contents": [
                        {
                            "kind": "block",
                            "type": "text_print",
                            "inputs": {
                                "TEXT": {
                                    "block": {
                                        "type": "text",
                                        "fields": {
                                            "TEXT": "'Twas brillig, and the slithy toves"
                                        }
                                    }
                                }
                            },
                            "next": {
                                "block": {
                                    "type": "text_print",
                                    "inputs": {
                                        "TEXT": {
                                            "block": {
                                                "type": "text",
                                                "fields": {
                                                    "TEXT": "  Did gyre and gimble in the wabe:"
                                                }
                                            }
                                        }
                                    },
                                    "next": {
                                        "block": {
                                            "type": "text_print",
                                            "inputs": {
                                                "TEXT": {
                                                    "block": {
                                                        "type": "text",
                                                        "fields": {
                                                            "TEXT": "All mimsy were the borogroves,"
                                                        }
                                                    }
                                                }
                                            },
                                            "next": {
                                                "block": {
                                                    "type": "text_print",
                                                    "inputs": {
                                                        "TEXT": {
                                                            "block": {
                                                                "type": "text",
                                                                "fields": {
                                                                    "TEXT": "  And the mome raths outgrabe."
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "kind": "block",
                            "type": "text_print",
                            "inputs": {
                                "TEXT": {
                                    "block": {
                                        "type": "text",
                                        "fields": {
                                            "TEXT": "\"Beware the Jabberwock, my son!"
                                        }
                                    }
                                }
                            },
                            "next": {
                                "block": {
                                    "type": "text_print",
                                    "inputs": {
                                        "TEXT": {
                                            "block": {
                                                "type": "text",
                                                "fields": {
                                                    "TEXT": "  The jaws that bite, the claws that catch!"
                                                }
                                            }
                                        }
                                    },
                                    "next": {
                                        "block": {
                                            "type": "text_print",
                                            "inputs": {
                                                "TEXT": {
                                                    "block": {
                                                        "type": "text",
                                                        "fields": {
                                                            "TEXT": "Beware the Jubjub bird, and shun"
                                                        }
                                                    }
                                                }
                                            },
                                            "next": {
                                                "block": {
                                                    "type": "text_print",
                                                    "inputs": {
                                                        "TEXT": {
                                                            "block": {
                                                                "type": "text",
                                                                "fields": {
                                                                    "TEXT": "  The frumious Bandersnatch!\""
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}