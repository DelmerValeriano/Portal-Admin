import React, { memo, useState } from 'react'
import { Button } from '../../atoms'
import CircularProgress from '@material-ui/core/CircularProgress';
import { createUser, deletUser, getUsers, updateUser } from '../../hooks';
import { DialogActions, useStyles } from "../styles"

const Actions = memo(({ setOpen, name, email, idUser, getUserData, setMessageForm, setOpenDelete, openDelete, create, setCreate, removed, setUser, setMessage, load }) => {
    const classes = useStyles();
    const emailCreator = JSON.parse(localStorage.getItem('email'));
    const [loading, setLoading] = useState(false);
    const state = {
        error: ''
    }
    const updateConfirm = async () => {
        try {
            const response = await updateUser(idUser, name, email, emailCreator);
            const { message, success } = response;
            if (!success) {
                return setMessageForm(message);
            };
            getUserData();
            setOpen(false);
            setLoading(false);
        } catch (error) {
            const { message, success } = error;
            if (!success) {
                setLoading(false);
                return setMessageForm(message);
            } else {
                setLoading(false);
                return setMessageForm(error);
            };
        }

    };

    const deleteConfirm = async () => {
        try {
            await deletUser(idUser);
            const response = await getUsers();
            setOpenDelete(false);
            setUser(response.data);
            setLoading(false);
        } catch (error) {
            const { success } = error;
            if (!success) {
                const r = "Se ha producido un error de red (como tiempo de espera, conexión interrumpida o host inaccesible).";
                state.error = r;
                setLoading(false);
                return setMessage(state.error);
            } else {
                setLoading(false);
                return setMessage(error);
            }
        }
    };

    const newUser = async () => {
        try {
            const response = await createUser(name, email, emailCreator);
            const { message, success } = response;
            if (!success) {
                setLoading(false);
                return setMessageForm(message);
            } else {
                setOpen(false);
                setCreate(false);
                setLoading(false);
            }
        } catch (error) {
            const { message, success } = error;
            if (!success) {
                setLoading(false);
                return setMessageForm(message);
            };
        }
    }

    const handleClose = () => {
        if (openDelete) {
            setOpenDelete(false);
        } else {
            setOpen(false);
        }
    };

    const functionCreateUpdateDeleteClose = () => {
        handleButtonClick();
        if (removed) {
            deleteConfirm();
        } else if (create) {
            newUser();
        } else {
            updateConfirm();
        }
    };

    const handleButtonClick = () => {
        if (!loading) {
            setLoading(true);
        }
    };
    return (
        <>
            <DialogActions>
                <Button color={"secondary"} name={"Cancelar"} outlined={"contained"} handleClose={handleClose} />
                <Button color={"primary"} name={"Aceptar"} outlined={"contained"} loading={loading} functionCreateUpdateDeleteClose={functionCreateUpdateDeleteClose} />
            </DialogActions>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            {load && <CircularProgress size={24} className={classes.buttonProgress} />}
        </>
    )
});

export default Actions