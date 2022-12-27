import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PestControlIcon from "@mui/icons-material/PestControl";

export default function Square(props) {
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
            className={props.className}
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
