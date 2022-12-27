import {
    Box,
    Button,
    CircularProgress,
    InputAdornment,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React, { useState } from "react";
import AbcIcon from "@mui/icons-material/Abc";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { BoardFormSchema } from "../validations/BoardFormValidation";

const initialValues = {
    name: "",
    row: "",
    column: "",
};

const useStyles = makeStyles((theme) => ({
    input: {
        '& label.Mui-focused': {
            color: theme.palette.primary.main,
            borderRadius: '15px',
            border: '2px solid',
        },
        '& .MuiInput-underline:after': {
            color: theme.palette.primary.main,
            borderRadius: '15px',
            border: '2px solid',
        },
        '& .MuiOutlinedInput-root': {
            color: theme.palette.primary.main,
            '& fieldset': {
                color: theme.palette.primary.main,
                borderRadius: '15px',
                border: '2px solid',
            },
            '&:hover fieldset': {
                color: theme.palette.primary.main,
                borderRadius: '15px',
                border: '2px solid',
            },
            '&.Mui-focused fieldset': {
                color: theme.palette.primary.main,
                borderRadius: '15px',
                border: '2px solid',
            },
        },
        '& .css-bn8pyn-MuiFormLabel-root-MuiInputLabel-root': {
            left: '0 !important',
            right: 'auto',
            marginLeft: '25px',
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            marginBottom: '25px !important',
            marginTop: '-5px',
            borderRadius: '15px',
            border: '2px solid',
        },
        "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.primary.main,

        },
        '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
            textAlign: 'left',
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.primary.main,
            fontSize: '0.9rem',
            borderRadius: '15px',
        },
        '& .css-1wc848c-MuiFormHelperText-root.Mui-error': {
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.error.main,
        }
    },
    inputIcon: {
        fontSize: '1.5rem',
        color: theme.palette.primary.main,
        marginBottom: 5
    },
    button: {
        borderRadius: '15px',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
        fontSize: '1rem',
        color: theme.palette.background.default,
    },
    error: {
        color: theme.palette.error.main,
        fontWeight: "bold",
    },
}));

export default function BoardForm() {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmmit = async (values) => {
        setLoading(true);
        try {
            console.log(values);
        } catch (error) {
            setError("there was a problem in creating the board");
        }
        setLoading(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={BoardFormSchema}
            onSubmit={(values) => handleSubmmit(values)}
        >
            <Form>
                <Stack direction="column"  alignItems="center">
                    <Field
                        disabled={loading}
                        name="name"
                        className={classes.input}
                        component={TextField}
                        placeholder="enter the board name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <AbcIcon className={classes.inputIcon} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Stack marginTop={2} direction="row" spacing={2} marginBottom={5}>
                        <Field
                            disabled={loading}
                            name="row"
                            className={classes.input}
                            component={TextField}
                            placeholder="enter the row"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <TableRowsIcon
                                            className={classes.inputIcon}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Field
                            disabled={loading}
                            name="column"
                            className={classes.input}
                            component={TextField}
                            placeholder="enter the column"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <ViewColumnIcon
                                            className={classes.inputIcon}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>

                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        startIcon={
                            loading ? (
                                <CircularProgress size={25} color="info" />
                            ) : null
                        }
                    >
                        CREATE
                    </Button>

                    <Box marginTop={2}>
                        {error !== "" && (
                            <Typography className={classes.error}>
                                {error}
                            </Typography>
                        )}
                    </Box>

                </Stack>
            </Form>
        </Formik>
    );
}
