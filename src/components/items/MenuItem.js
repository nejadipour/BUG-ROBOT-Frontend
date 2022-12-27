import {
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
    item: {
        borderRadius: "15px",
        border: "2px solid",
        minWidth: "20vw",
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        color: theme.palette.primary.main,
        "& .MuiSvgIcon-root": {
            fontSize: "2.5rem",
        },
        paddingRight: theme.spacing(1.5),
    },
}));

export default function MenuItem(props) {
    const classes = useStyles();
    const { board } = props;
    const navigate = useNavigate();

    return (
        <ListItem
            component={Button}
            state={{ board: board }}
            to={"/game"}
            className={classes.item}
            onClick={() => {
                navigate("/game", {
                    state: { board: board },
                });
            }}
        >
            <ListItemIcon className={classes.icon}>
                <SmartToyIcon />
            </ListItemIcon>

            <ListItemText primary={<Typography>{board.name}</Typography>} />
        </ListItem>
    );
}
