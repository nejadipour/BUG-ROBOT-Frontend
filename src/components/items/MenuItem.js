import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ClearIcon from "@mui/icons-material/Clear";

export default function MenuItem(props) {
    const { board } = props;
    return (
        <ListItem component={Link} state={{ board: board }} to={"/game"}>
            <ListItemButton>
                <ListItemIcon>
                    <SmartToyIcon />
                </ListItemIcon>

                <ListItemText primary={<Typography>{board.name}</Typography>} />

                <ListItemIcon>
                    <ClearIcon />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}
