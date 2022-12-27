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

const initialValues = {
    name: "",
    row: "",
    column: "",
};

const useStyles = makeStyles((theme) => ({}));

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
            validationSchema={null}
            onSubmit={(values) => handleSubmmit(values)}
        >
            <Form>
                <Stack direction="column">
                    <Field
                        disabled={loading}
                        name="name"
                        className={classes.input}
                        component={TextField}
                        placeholder="enter the board name"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AbcIcon className={classes.inputIcon} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Stack direction="row">
                        <Field
                            disabled={loading}
                            name="row"
                            className={classes.input}
                            component={TextField}
                            placeholder="enter the row"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
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
                                endAdornment: (
                                    <InputAdornment position="start">
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

                    <Box height="5vh" padding={2} marginTop={2}>
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
