import React, { useState } from 'react'
import { Typography } from '../../atoms';
import { useStyles, Toolbar, Button, RecentActorsIcon } from "../styles";
import { SignOut } from '../../organisms';

const Tool = () => {
    const classes = useStyles();
    const email = JSON.parse(localStorage.getItem('email'));
    const [confirmSignOut, setConfirmSignOut] = useState(false);

    const LogOutUser = () => {
        setConfirmSignOut(true);
    }
    return (
        <Toolbar>
            <Typography name={"Panel Administrativo"} variant={"h6"} noWrap={true} classes={classes.title} />
            <RecentActorsIcon fontSize="medium" className={classes.avatarLogin}/>
            <Typography name={email} variant={"subtitle2"} classes={classes.email} />
            <Button color="inherit" size="small" onClick={LogOutUser}>Cerrar Sesión</Button>
            <SignOut setConfirmSignOut={setConfirmSignOut} confirmSignOut={confirmSignOut} titleOut={"¿Desea Cerrar Sesión?"} btnOut={"Cerrar Sesión"} align={"center"} />
        </Toolbar>
    )
}

export default Tool
