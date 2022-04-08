import React from 'react'
import { Alert } from '../../atoms';
import { useStyles, Snackbar } from '../styles'

const CustomizedSnackbars = ({ message, setOpen, open }) => {
    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert message={message} handleClose={handleClose} />
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbars
