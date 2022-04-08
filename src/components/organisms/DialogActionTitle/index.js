import React, { memo, useCallback, useEffect, useState } from 'react'
import { getUserId } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import { DialogAction, DialogDiv } from '../../molecules'
import { Dialog } from "../styles";

const ActionTitle = memo(({ open, setOpen, idUser, getUserData, create, setCreate, setError }) => {
    const [messageForm, setMessageForm] = useState(null);
    const [load, setLoad] = useState(false);
    const [values, handleInputChange, setValues] = useForm({
        name: '',
        email: '',
    });

    const { name, email } = values;

    const getUser = useCallback(async () => {
        try {
            setLoad(true);
            const response = await getUserId(idUser);
            const { data } = response;
            setValues({ name: data.name, email: data.email });
            setLoad(false);

        } catch (error) {
            const { message, success } = error;
            if (!success) {
                setLoad(false);
                return setError(message);
            };
        }
    }, [idUser, setValues, setError]);

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogDiv idUser={idUser} name={name} email={email} handleInputChange={handleInputChange} value={name} messageForm={messageForm} setMessageForm={setMessageForm} />
                <DialogAction setOpen={setOpen} name={name} email={email} idUser={idUser} getUserData={getUserData} setMessageForm={setMessageForm} create={create} setCreate={setCreate} setError={setError} load={load} setLoad={setLoad} />
            </Dialog>
        </>
    )
});

export default ActionTitle
