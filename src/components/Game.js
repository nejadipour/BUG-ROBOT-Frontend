import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Board from "./Board";

const useStyles = makeStyles(theme => ({
    deleteButton: {
        color: theme.palette.secondary.main,
        borderRadius: '15px',
    },
    menuButton: {
        color: theme.palette.primary.main,
        borderRadius: '15px',
    }
}))

export default function Game(props) {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" md={12} sm={12}>
            <Grid item md={12} sm={12}>
                <Board boardId={props.boardId} />
            </Grid>
            <Button variant="outlined" className={classes.menuButton}>Back to Menu</Button>
            <Button variant="outlined" className={classes.deleteButton}>Delete Board</Button>
        </Grid>
    );
}
