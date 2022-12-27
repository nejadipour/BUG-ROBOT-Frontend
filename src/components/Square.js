import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PestControlIcon from "@mui/icons-material/PestControl";

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
        position,
        type,
        is_occupied,
        selectedCard,
        changeCard,
        setChangeCard,
        selectedSquare,
        setSelectedSquare,
    } = props;
    const [squareType, setSquareType] = useState(type);

    const handleClick = () => {
        // testing deleting a position
        if (position === "[0,0]") {
            setChangeCard("[1,1]");
        }
        if (selectedCard) {
            // add card
            if (selectedCard === "robot_card") {
                setSquareType("BOT");
            } else {
                setSquareType("BUG");
            }
        } else {
            if (selectedSquare) {
                // move card
                setSelectedSquare(null);
            } else {
                // select a square
                if (squareType === "BOT") {
                    setSelectedSquare(position);
                }
            }
        }
    };

    useEffect(() => {
        if (changeCard && changeCard === position) {
            setSquareType("");
            setChangeCard(null);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeCard]);

    return (
        <Button
            id={position}
            className={classes.square}
            style={
                selectedSquare === position
                    ? { backgroundColor: "#ffa42e" }
                    : null
            }
            onClick={() => {
                handleClick();
            }}
        >
            {is_occupied && (
                <>
                    {squareType === "BOT" && <SmartToyIcon />}
                    {squareType === "BUG" && <PestControlIcon />}
                </>
            )}
        </Button>
    );
}
