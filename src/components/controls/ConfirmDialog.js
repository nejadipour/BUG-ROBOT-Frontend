import React from 'react'
import { Dialog, DialogContent, DialogActions, Typography, makeStyles, Button, Grid } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(20),
        width: '50vw',
        minHeight: '20vh',
        background: theme.palette.background.default,
    },
    dialogContent: {
        textAlign: 'center',
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    dialogAction: {
        justifyContent: 'center'
    },
    confirmButton: {
        minWidth: '80px',
        width: '6vw',
        borderRadius: '15px',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
        fontSize: '1rem',
        color: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: theme.spacing(2)
    },
    rejectButton: {
        minWidth: '80px',
        width: '6vw',
        borderRadius: '15px',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        fontSize: '1rem',
        color: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: theme.spacing(2)
    }

}))

export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();

    const confirmButtonInfo = confirmDialog.confirmButtonInfo ?
        confirmDialog.confirmButtonInfo : {
            text: "YES",
            color: "secondary"
        }

    const rejectButtonInfo = confirmDialog.rejectButtonInfo ?
        confirmDialog.rejectButtonInfo : {
            text: "CANCELE",
            color: "default",
        }

    const handleClose = () => {
        setConfirmDialog({ ...confirmDialog, isOpen: false })
    };

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }} onClose={handleClose}>
            <DialogContent>
                <Typography className={classes.dialogContent}>
                    {confirmDialog.title}
                </Typography>
            </DialogContent>

            <DialogActions className={classes.dialogAction}>
                <Grid justifyContent='center' container md={12} sm={12}>
                        <Button className={classes.rejectButton} onClick={handleClose}>
                            {rejectButtonInfo.text}
                        </Button>
                    
                        <Button className={classes.confirmButton} onClick={confirmDialog.onConfirm}>
                            {confirmButtonInfo.text}
                        </Button>                    
                </Grid>
            </DialogActions>

        </Dialog>
    )
}
