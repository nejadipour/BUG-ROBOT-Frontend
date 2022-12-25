import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Board from "./Board";
import Stack from "@mui/material/Stack";

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

    return (
        <Grid container justifyContent="center" md={12} sm={12}>
            <Grid item md={12} sm={12}>
                <Board boardId={props.boardId} />
            </Grid>
            <Stack marginTop={10} direction="row" spacing={2}>
                <Button variant="outlined" className={classes.menuButton}>
                    Back to Menu
                </Button>
                <Button variant="outlined" className={classes.deleteButton}>
                    Delete Board
                </Button>
            </Stack>
        </Grid>
    );
}
