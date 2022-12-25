import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    message: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.error.main,
        fontSize: '0.9rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: theme.spacing(30),
    }

}))

export default function NotFound(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.message}>Page Not Found</Typography>
    )

}
