import {
    Box,
    Button,
    Grid,
    List,
    Typography,
    makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MenuItem from "../components/items/MenuItem";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.error.main,
        fontWeight: "bold",
    },
    createButton: {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        borderRadius: "15px",
        boxShadow: "none",
    },
}));

export default function Menu() {
    const classes = useStyles();
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState("");
    const [render, setRender] = useState(false);

    async function fetchBoards() {
        try {
            // const response = await axios.get('')
            // setBoards(response.data);

            setBoards([
                {
                    shape: [4, 4],
                    name: "test board",
                },
                {
                    shape: [4, 4],
                    name: "test board2",
                },
            ]);

            setRender(true);
        } catch (error) {
            setError("there was a problem fetching the boards");
            setRender(true);
        }
    }

    useEffect(() => {
        if (!render) fetchBoards();
    }, [render]);

    return (
        <Grid container justifyContent="center">
            {render && (
                <Stack alignItems="center" direction="column">
                    <List
                        sx={{
                            minWidth: "25vw",
                            position: "relative",
                            overflow: "auto",
                            maxHeight: "60vh",
                            "& ul": { padding: 0 },
                        }}
                        subheader={<li />}
                    >
                        {boards.map((board) => (
                            <MenuItem board={board} />
                        ))}
                    </List>

                    <Box padding={2}>
                        {error !== "" && (
                            <Typography className={classes.error}>
                                {error}
                            </Typography>
                        )}
                    </Box>

                    <Button variant="outlined" className={classes.createButton}>
                        +Add Board
                    </Button>
                </Stack>
            )}
        </Grid>
    );
}
