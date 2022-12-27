import {
    Dialog,
    DialogTitle,
    DialogContent,
    makeStyles,
    Typography,
    Button,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        backgroundColor: theme.palette.background.default,
        maxHeight: "80vh",
        padding: theme.spacing(1),
        position: "absolute",
        top: theme.spacing(5),
        maxWidth: "100vw",
    },
    dialogTitle: {
        color: theme.palette.primary.main,
        paddingLeft: theme.spacing(3),
    },
}));

export default function Popup(props) {
    const {
        title,
        children,
        openPopup,
        setOpenPopup,
        disableClickOutClose,
        disableClose,
    } = props;
    const classes = useStyles();

    const handleClose = () => {
        setOpenPopup(false);
    };

    return (
        <Dialog
            open={openPopup}
            maxWidth="md"
            classes={{ paper: classes.dialogWrapper }}
            onClose={disableClickOutClose || disableClose ? null : handleClose}
        >
            <DialogTitle className={classes.dialogTitle}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ marginRight: "16px" }}
                    >
                        {title}
                    </Typography>

                    {!disableClose ? (
                        <Button color="secondary" onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    ) : (
                        <div />
                    )}
                </div>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    );
}
