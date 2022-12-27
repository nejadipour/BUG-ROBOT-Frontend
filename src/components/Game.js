import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Board from "./Board";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    deleteButton: {
        color: theme.palette.error.main,
        borderRadius: "15px",
    },
    menuButton: {
        color: theme.palette.primary.main,
        borderRadius: "15px",
        boxShadow: "none",
    },
}));

export default function Game(props) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Grid container justifyContent="center" md={12} sm={12}>
            <Grid item md={12} sm={12}>
                <Board board={location.state?.board} />
            </Grid>
            <Stack marginTop={10} marginBottom={15} direction="row" spacing={2}>
                <Button component={Link} to={"/home"} variant="outlined" className={classes.menuButton}>
                    Back to Menu
                </Button>
                <Button variant="outlined" className={classes.deleteButton}>
                    Delete Board
                </Button>
            </Stack>
        </Grid>
    );
}
