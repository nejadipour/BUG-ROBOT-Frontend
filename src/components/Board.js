import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PestControlIcon from "@mui/icons-material/PestControl";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Square from "./Square";

const useStyles = makeStyles((theme) => ({
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
}));

export default function Board() {
    const classes = useStyles();
    const [shape, setShape] = useState([10, 10]); // shape format: [row, column]

    const rows = [];
    for (var r = 0; r < shape[0]; r++) {
        rows.push(r);
    }

    const columns = [];
    for (var c = 0; c < shape[1]; c++) {
        columns.push(c);
    }

    return (
        <Grid container justifyContent="center" md={12} sm={12}>
            <Grid item md={3} sm={12} />
            <Grid item md={6} sm={12}>
                <Stack direction="column" alignItems="center">
                    {rows.map((row) => (
                        <Stack direction="row">
                            {columns.map((column) => (
                                <Square position={[row, column]}/>
                            ))}
                        </Stack>
                    ))}
                </Stack>
            </Grid>

            {/* The Buttons Needed in The Game  */}
            <Grid item md={2} sm={12}>
                <Stack direction="column" alignItems="center" spacing={3}>
                    {/* The Robot Card Button */}
                    <Button variant="outlined" className={classes.cardButton}>
                        <Stack
                            direction="column"
                            alignItems="center"
                            spacing={1}
                        >
                            <SmartToyIcon />
                            <Typography>Robot</Typography>
                        </Stack>
                    </Button>

                    {/* The BUG Card Button */}
                    <Button variant="outlined" className={classes.cardButton}>
                        <Stack
                            direction="column"
                            alignItems="center"
                            spacing={1}
                        >
                            <PestControlIcon />
                            <Typography>BUG</Typography>
                        </Stack>
                    </Button>

                    {/* The Fire Action Button */}
                    <Button className={classes.fireButton}>
                        <Stack direction="row" spacing={1}>
                            <WhatshotIcon />
                            <Typography>Attack</Typography>
                        </Stack>
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={1} sm={12} />
        </Grid>
    );
}
