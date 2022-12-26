import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.primary.main,
        margin: "15px",
        border: "2px solid " + theme.palette.secondary.main,
        borderRadius: "15px",
        boxShadow: "0 12px " + theme.palette.secondary.main + ", 0 18px rgba(0,0,0,0.4)",
        width: "90px",
        height: "80px",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
      },
    },
}));

export default function Square(props) {
    const classes = useStyles();

    return <Button className={classes.button}></Button>;
}
