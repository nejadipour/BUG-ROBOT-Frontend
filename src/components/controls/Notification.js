import React from 'react'
import { Snackbar, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(2),
        '& .MuiAlert-standardSuccess': {
            backgroundColor: theme.palette.background.secondary,
        },
        '& .MuiAlert-standardError': {
            backgroundColor: theme.palette.background.secondary,
        },
        '& .MuiAlert-icon': {
            margin: '5px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        '& .MuiAlert-message': {
            padding: '5px',
            margin: '5px',
            marginLeft: '20px',
            fontSize: '1rem',
            fontFamily: theme.typography.fontFamily + '!important',
            color: theme.palette.primary.main
        }
    }
}))

export default function Notification(props) {

    const { notify, setNotify } = props;
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
