import { Box, Grid, makeStyles } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import logo from "../assets/bug_robot_logo.jpg";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
    },
    logoContainer: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
    },
    logo: {
        width: "140px",
    },
}));

export default function LandingLayout(props) {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center">
            <Box className={classes.wrapper}>
                <Grid
                    container
                    justifyContent="center"
                    className={classes.logoContainer}
                >
                    <a href="/home">
                        <img
                            src={logo}
                            alt={"logo of the BUG & ROBOT game"}
                            className={classes.logo}
                        />
                    </a>
                </Grid>
                <Outlet />
            </Box>
        </Grid>
    );
}
