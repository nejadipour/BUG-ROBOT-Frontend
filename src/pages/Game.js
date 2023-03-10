import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useContext } from "react";
import Board from "../components/Board";
import Stack from "@mui/material/Stack";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ConfirmDialog from "../components/controls/ConfirmDialog";
import axios from "axios";
import { NotificationContext } from "../contexts/NotificationContext";

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

export default function Game() {
    const classes = useStyles();
    const location = useLocation();
    const board = location.state?.board;
    const navigate = useNavigate();
    const { setNotify } = useContext(NotificationContext);

    const [confirmLogout, setConfirmLogout] = useState({
        isOpen: false,
        title: "Are You Sure to Delete This Board?",
        onConfirm: () => {
            return handleDelete();
        },
    });

    const handleDelete = async () => {
        try {
            await axios.delete("/board/" + board.id);
            setNotify({
                isOpen: true,
                message: 'board deleted',
                type: 'error'
            })
            navigate("/home");
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <>
            <Grid container justifyContent="center" md={12} sm={12}>
                <Grid item md={12} sm={12}>
                    <Board board={board} />
                </Grid>
                <Stack
                    marginTop={10}
                    marginBottom={15}
                    direction="row"
                    spacing={2}
                >
                    <Button
                        component={Link}
                        to={"/home"}
                        variant="outlined"
                        className={classes.menuButton}
                    >
                        Back to Menu
                    </Button>
                    <Button
                        variant="outlined"
                        className={classes.deleteButton}
                        onClick={() => {
                            setConfirmLogout({
                                ...confirmLogout,
                                isOpen: true,
                            });
                        }}
                    >
                        Delete Board
                    </Button>
                </Stack>
            </Grid>

            <ConfirmDialog
                confirmDialog={confirmLogout}
                setConfirmDialog={setConfirmLogout}
            />
        </>
    );
}
