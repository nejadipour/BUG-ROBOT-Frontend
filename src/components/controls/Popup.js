import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        maxHeight: '80vh',
        padding: theme.spacing(1),
        position: 'absolute',
        top: theme.spacing(5),
        maxWidth: '100vw'
    },
    dialogTitle: {
        paddingLeft: '0px'
    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup, disableClickOutClose, disableClose } = props;
    const classes = useStyles();

    const handleClose = () => {
        setOpenPopup(false)
    };

    return (
        <Dialog
            open={openPopup}
            maxWidth="md"
            classes={{ paper: classes.dialogWrapper }}
            onClose={(disableClickOutClose || disableClose) ? null : handleClose}
        >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    {!disableClose ?

                        <Controls.ActionButton
                            color="secondary"
                            onClick={handleClose}>
                            <CloseIcon />
                        </Controls.ActionButton>
                        : <div/>
                    }
                    <Typography variant="h6" component="div" style={{ marginRight: '16px' }}>
                        {title}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
