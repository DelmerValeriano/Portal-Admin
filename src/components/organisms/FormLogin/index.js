import React, { useContext, useState } from 'react'
import { IconAppland } from '../../atoms'
import { FormElementLogin } from '../../molecules'
import { Snack } from '../../molecules';
import { FirebaseContext } from '../../../firebase';
import { types } from '../../commons/type';
import { useForm } from '../../hooks/useForm';
import { useStyles } from '../styles'

const FormLogin = () => {
    const classes = useStyles();
    const { firebase, dispatch } = useContext(FirebaseContext);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = values;

    const formValid = () => {
        if (email.trim().length === 0) {
            setOpen(true);
            setMessage('Debe ingresar un correo electrónico');
            return false;
        } else if (password.trim().length === 0) {
            setOpen(true);
            setMessage('Debe ingresar una contraseña');
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            firebase.auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    localStorage.setItem('email', JSON.stringify(userCredential.user.email));
                    dispatch({
                        type: types.login
                    });
                })
                .catch(error => {
                    const { code } = error;
                    if (code === "auth/wrong-password") {
                        setOpen(true);
                        setMessage('Contraseña incorrecta.');
                    } else if (code === "auth/user-not-found") {
                        setOpen(true);
                        setMessage('Usuario no encontrado o desahabilitado.');
                    } else if (code === "auth/too-many-requests") {
                        setOpen(true);
                        setMessage('El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde.');
                    } else if (code === "auth/invalid-email") {
                        setOpen(true);
                        setMessage('Email incorrecto o no válido.');
                    } else {
                        setOpen(true);
                        setMessage('Se ha producido un error de red (como tiempo de espera, conexión interrumpida o host inaccesible).');
                    }
                });
        }
    };

    return (
        <>
            <div onSubmit={handleSubmit} className={classes.paper}>
                <IconAppland />
                <form className={classes.form} noValidate>
                    <FormElementLogin handleInputChange={handleInputChange} email={email} password={password} />
                </form>
            </div>
            {open ? <Snack message={message} setOpen={setOpen} open={open} /> : null}
        </>
    )
}

export default FormLogin
