import { Button, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";

export default function Card(props) {
    const { icon, text, id, selectedCard, setSelectedCard, state } = props;

    const handleClick = () => {
        if (selectedCard === id) {
            setSelectedCard(null);
        }
        else {
            setSelectedCard(id);
        }
    };

    return (
        <Button
            id={id}
            variant="outlined"
            style= {id === selectedCard ? state.selected : state.default}
            className={props.className}
            onClick={handleClick}
        >
            <Stack direction="column" alignItems="center" spacing={1}>
                {icon}
                <Typography>{text}</Typography>
            </Stack>
        </Button>
    );

}
