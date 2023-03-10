import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PestControlIcon from "@mui/icons-material/PestControl";
import axios from "axios";
import { NotificationContext } from "../contexts/NotificationContext";

const useStyles = makeStyles((theme) => ({
    square: {
        backgroundColor: theme.palette.primary.main,
        margin: "15px",
        border: "2px solid " + theme.palette.secondary.main,
        borderRadius: "15px",
        boxShadow:
            "0 12px " +
            theme.palette.secondary.main +
            ", 0 18px rgba(0,0,0,0.4)",
        width: "90px",
        height: "80px",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        "& .MuiSvgIcon-root": {
            fontSize: "2rem",
            color: theme.palette.background.main,
        },
    },
}));

export default function Square(props) {
    const classes = useStyles();
    const {
        square,
        selectedCard,
        changeCardList,
        setChangeCardList,
        selectedSquare,
        setSelectedSquare,
    } = props;
    const [squareType, setSquareType] = useState(square.square_type);
    const [squareOccupied, setSsquareOccupied] = useState(square.is_occupied);
    const { setNotify } = useContext(NotificationContext);

    async function handleMove() {
        if (selectedSquare === square.id) {
            setSelectedSquare(null);
        } else {
            try {
                const response = await axios.post(
                    "/square/" + selectedSquare + "/move/?destination="+square.id);
                setChangeCardList(response.data);
                setSelectedSquare(null);
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
    }

    async function handleAdd() {
        const newSquareType = selectedCard === "robot_card" ? "BOT" : "BUG";
        try {
            await axios.post("/square/" + square.id + "/add_card/?square_type="+newSquareType);
            setSsquareOccupied(true);
            setSquareType(newSquareType);
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

    const handleClick = () => {
        if (selectedCard) {
            // add card
            handleAdd();
        } else {
            if (selectedSquare) {
                // move card
                handleMove();
            } else {
                // select a square
                if (squareType === "BOT") {
                    setSelectedSquare(square.id);
                }
            }
        }
    };

    useEffect(() => {
        if (changeCardList) {
            changeCardList.forEach((card) => {
                if (card.id === square.id) {
                    setSquareType(card.square_type);
                    setSsquareOccupied(card.is_occupied);
                }
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeCardList]);

    return (
        <Button
            id={square.id}
            className={classes.square}
            style={
                selectedSquare === square.id
                    ? { backgroundColor: "#ffa42e" }
                    : null
            }
            onClick={() => {
                handleClick();
            }}
        >
            {squareOccupied && (
                <>
                    {squareType === "BOT" && <SmartToyIcon />}
                    {squareType === "BUG" && <PestControlIcon />}
                </>
            )}
        </Button>
    );
}
