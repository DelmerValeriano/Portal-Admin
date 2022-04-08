import React, { memo } from 'react'
import { PropsInputAccount, PropsInputEmail, TextDialog, TextInput } from '../../atoms'
import { DialogContent, useStyles } from "../styles"

const Dialog = memo(({ name, email, handleInputChange, messageForm }) => {
    const classes = useStyles();
    return (
        <>
            <TextDialog title={"Información del Usuario"} />
            <DialogContent className={classes.dialogWidth} >
                <div>
                    <TextInput placeholder={"Nombre"} nameUser={name} value={name} handleInputChange={handleInputChange} name={"name"} input={<PropsInputEmail />} />
                </div>
                <div>
                    <TextInput placeholder={"Correo Electrónico"} emailUser={email} value={email} handleInputChange={handleInputChange} name={"email"} messageForm={messageForm} empty={null} input={<PropsInputAccount />} />
                </div>
            </DialogContent>
        </>
    )
});

export default Dialog
