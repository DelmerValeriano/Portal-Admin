import React from 'react'
import { Button, TextInput } from '../../atoms'

const Form = ({ email, password, handleInputChange }) => {
    return (
        <>
            <TextInput label={"Correo Electrónico"} value={email} handleInputChange={handleInputChange} name={"email"} />
            <TextInput label={"Contraseña"} value={password} handleInputChange={handleInputChange} name={"password"} />
            <Button value={"Iniciar Sesión"} submit={"submit"} contained={"contained"} color={"primary"} />
        </>
    )
}

export default Form