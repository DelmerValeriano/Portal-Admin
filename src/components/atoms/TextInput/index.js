import React from 'react'
import { TextField } from "../styles";

const Input = ({ value, label, name, handleInputChange, messageForm, input, placeholder }) => {
    return (
        <TextField
            error={messageForm ? true : false}
            margin="normal"
            required
            fullWidth
            name={name}
            value={"" || value}
            label={label}
            onChange={handleInputChange}
            type={name}
            helperText={messageForm ? messageForm : null}
            InputProps={{
                startAdornment: (
                    input
                )
            }}
            placeholder={placeholder}
        />
    )
}

export default Input