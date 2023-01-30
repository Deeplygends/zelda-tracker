import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({

    palette: {
        mode: 'dark',
        background: {
            default: '#3d3d3d',
            paper: '#3d3d3d'
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",

        },
        primary: {
            main: '#919088',

        },
        secondary: {
            main: '#db595d',
        },
    },

    typography: {
        htmlFontSize: 18,
        fontFamily: 'Roboto',

    },

    components:
    {
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: '1px'
                }
            }
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    height: '24px'
                }
            }
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: '#DB595D',
                        color: '#ffffff'
                    },
                },
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    "&.Mui-checked, &.Mui-checked .MuiSwitch-track": {
                        color: "#db595d"
                    }
                },
                thumb: {
                    style: {
                        color: "#db595d"
                    }
                },
                track: {
                    style: {
                        color: "#db595d"
                    }

                }
            }
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3d3d3d',
                    color: '#E4E1DF'
                }
            },
            variants: [
                {
                    props: { className: 'ultra-dense' },
                    style: {
                        "& tbody tr td": {
                            padding: 0,
                            paddingLeft: "1px"
                        },
                        "& tbody tr td span": {
                            padding: "2px"
                        },
                        "& thead tr th": {
                            fontSize: "12px",
                            fontWeight: "bold",
                            border: "solid 1px white"
                        }
                    }
                },
                {
                    props: { className: 'ultra-dense-header' },
                    style: {
                        "& tbody tr td": {
                            padding: 0,
                            paddingLeft: "1px"
                        },
                        "& tbody tr td span": {
                            padding: "2px"
                        },
                        "& thead tr th": {
                            padding: 1,
                            paddingLeft: "3px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            border: "solid 1px white"
                        }
                    }
                }

            ]
        },

        MuiTableCell: {
            styleOverrides: {
                footer: {
                    color: "#A39F96",
                },
                stickyHeader: {
                    backgroundColor: "#A39F96",
                    color: "#E4E1DF",
                    top: "-5px"
                },
            }
        },

        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: "white"
                }
            }
        },

        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: '#645c5c',
                        color: '#AAd9D5'
                    }
                }
            }

        },

        MuiTableFooter: {
            variants: [
                {
                    props: { className: "sticky-footer" },
                    style: {
                        "& tr td": {
                            position: "sticky",
                            bottom: "-5px",
                            backgroundColor: "#A39F96",
                            color: "#E4E1DF",
                            minHeight: "50px",
                            minWidth: "5px"
                        }
                    }
                }
            ]
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: "lavender"
                }
            }
        },

        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F",
                    color: "#919088"
                }
            }
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    width: "100%",
                    margin: "5px"
                }
            }
        },

        MuiStepLabel: {
            styleOverrides: {
                label: {
                    "&.Mui-completed": {
                        color: "green"
                    },
                    "&.Mui-active": {
                        color: "lightblue"
                    }
                }
            }
        },

        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.Mui-completed": {
                        color: "green"
                    },
                    "&.Mui-active": {
                        color: "lightblue"
                    }
                }
            }
        }
    },

});
