import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    dialog: {
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(20),
        width: "50vw",
        minHeight: "20vh",
        background: theme.palette.background.default,
    },
    dialogContent: {
        textAlign: "center",
        color: theme.palette.primary.main,
        fontWeight: "bold",
    },
    dialogAction: {
        justifyContent: "center",
    },
    confirmButton: {
        minWidth: "80px",
        width: "6vw",
        borderRadius: "15px",
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        fontSize: "1rem",
        color: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        margin: theme.spacing(2),
    },
    rejectButton: {
        minWidth: "80px",
        width: "6vw",
        borderRadius: "15px",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        fontSize: "1rem",
        color: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        margin: theme.spacing(2),
    },
    error: {
        color: theme.palette.error.main,
        fontWeight: "bold",
    },
}));

export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();
    const [error, setError] = useState("");

    const confirmButtonInfo = confirmDialog.confirmButtonInfo
        ? confirmDialog.confirmButtonInfo
        : {
              text: "YES",
              color: "secondary",
          };

    const rejectButtonInfo = confirmDialog.rejectButtonInfo
        ? confirmDialog.rejectButtonInfo
        : {
              text: "NO!",
              color: "default",
          };

    const handleClose = () => {
        setConfirmDialog({ ...confirmDialog, isOpen: false });
    };

    const handleClick = async () => {
        var success = await confirmDialog.onConfirm();
        if (!success) {
            setError("there was a problem in confirming the action");
        }
    };

    return (
        <Dialog
            open={confirmDialog.isOpen}
            classes={{ paper: classes.dialog }}
            onClose={handleClose}
        >
            <DialogContent>
                <Typography className={classes.dialogContent}>
                    {confirmDialog.title}
                </Typography>
            </DialogContent>

            <DialogActions className={classes.dialogAction}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    {error !== "" && (
                        <Typography className={classes.error}>
                            {error}
                        </Typography>
                    )}
                    <Stack direction="row">
                        <Button
                            className={classes.rejectButton}
                            onClick={handleClose}
                        >
                            {rejectButtonInfo.text}
                        </Button>

                        <Button
                            className={classes.confirmButton}
                            onClick={handleClick}
                        >
                            {confirmButtonInfo.text}
                        </Button>
                    </Stack>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}
