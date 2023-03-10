import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PestControlIcon from "@mui/icons-material/PestControl";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Square from "./Square";
import Card from "./Card";
import axios from "axios";
import { NotificationContext } from "../contexts/NotificationContext";

const useStyles = makeStyles((theme) => ({
    name: {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
    },
    cardButton: {
        "& .MuiSvgIcon-root": {
            fontSize: "2.5rem",
        },
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        borderRadius: "15px",
        minWidth: "5.5vw",
    },
    fireButton: {
        color: theme.palette.background.main,
        borderRadius: "15px",
        backgroundColor: theme.palette.fire.main,
        "&:hover": {
            backgroundColor: theme.palette.fire.main,
        },
    },
    error: {
        color: theme.palette.error.main,
        fontWeight: "bold",
    },
}));

export default function Board(props) {
    const classes = useStyles();
    const { board } = props;
    const [selectedCard, setSelectedCard] = useState(null);
    const [changeCardList, setChangeCardList] = useState(null);
    const [selectedSquare, setSelectedSquare] = useState(null);
    const [render, setRender] = useState(false);
    const [squares, setSquares] = useState([]);
    const [error, setError] = useState("");
    const { setNotify } = useContext(NotificationContext);

    async function fetchSquares() {
        try {
            const response = await axios.get(
                "/square/get_board_squares/?board=" + board.id
            );
            setSquares(response.data);
            setRender(true);
        } catch (error) {
            setError("there was a problem fetching the squares");
        }
    }

    useEffect(() => {
        if (!render) fetchSquares();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [render]);

    const rows = [];
    if (board && board.row) {
        for (var r = 0; r < board.row ? board.row : 0; r++) {
            rows.push(r);
        }
    }

    const columns = [];
    if (board && board.column) {
        for (var c = 0; c < board.column ? board.column : 0; c++) {
            columns.push(c);
        }
    }

    async function handleAttack() {
        try {
            const response = await axios.post(
                "/square/" + selectedSquare + "/attack/"
            );
            setChangeCardList(response.data);
        } catch (error) {
            // notification pop-up
            const message = error.response.data.message;
            if (message) {
                setNotify({
                    isOpen: true,
                    message: message,
                    type: "error",
                });
            } else {
                setNotify({
                    isOpen: true,
                    message: "unknown error occurred",
                    type: "error",
                });
            }
        }
    }

    return (
        <>
            {render && (
                <Grid container justifyContent="center" md={12} sm={12}>
                    <Grid item md={3} sm={12} />
                    <Grid item md={6} sm={12}>
                        <Stack direction="column" alignItems="center">
                            {rows.map((row) => (
                                <Stack direction="row">
                                    {columns.map((column) => (
                                        <Square
                                            square={
                                                squares[
                                                    "[" +
                                                        column +
                                                        "," +
                                                        row +
                                                        "]"
                                                ]
                                            }
                                            selectedCard={selectedCard}
                                            changeCardList={changeCardList}
                                            setChangeCardList={
                                                setChangeCardList
                                            }
                                            selectedSquare={selectedSquare}
                                            setSelectedSquare={
                                                setSelectedSquare
                                            }
                                        />
                                    ))}
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item md={1} sm={12} />
                    {/* The Buttons Needed in The Game  */}
                    <Grid item md={2} sm={12}>
                        <Stack
                            marginTop={5}
                            direction="column"
                            alignItems="center"
                            spacing={3}
                        >
                            <Typography className={classes.name}>
                                {board ? board.name : ""}
                            </Typography>
                            {/* The Robot Card Button */}
                            <Card
                                icon={<SmartToyIcon />}
                                text={"ROBOT"}
                                id={"robot_card"}
                                className={classes.cardButton}
                                state={{
                                    default: {
                                        color: "#ffa42e",
                                        backgroundColor: "#201f1d",
                                    },
                                    selected: {
                                        color: "#201f1d",
                                        backgroundColor: "#ffa42e",
                                    },
                                }}
                                selectedCard={selectedCard}
                                setSelectedCard={setSelectedCard}
                            />

                            {/* The BUG Card Button */}
                            <Card
                                icon={<PestControlIcon />}
                                text={"BUG"}
                                id={"bug_card"}
                                className={classes.cardButton}
                                state={{
                                    default: {
                                        color: "#ffa42e",
                                        backgroundColor: "#201f1d",
                                    },
                                    selected: {
                                        color: "#201f1d",
                                        backgroundColor: "#ffa42e",
                                    },
                                }}
                                selectedCard={selectedCard}
                                setSelectedCard={setSelectedCard}
                            />

                            {/* The Fire Action Button */}
                            <Button
                                disabled={selectedSquare === null}
                                className={classes.fireButton}
                                onClick={handleAttack}
                            >
                                <Stack direction="row" spacing={1}>
                                    <WhatshotIcon />
                                    <Typography>Attack</Typography>
                                </Stack>
                            </Button>
                        </Stack>
                    </Grid>
                    <Box padding={2}>
                        {error !== "" && (
                            <Typography className={classes.error}>
                                {error}
                            </Typography>
                        )}
                    </Box>
                </Grid>
            )}
            {!render && (
                <>
                    <Grid container justifyContent="center">
                        <Box padding={2}>
                            {error !== "" && (
                                <Typography className={classes.error}>
                                    {error}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </>
            )}
        </>
    );
}
