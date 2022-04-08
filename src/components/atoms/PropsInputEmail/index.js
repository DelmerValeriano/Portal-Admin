import React from 'react'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { InputAdornment } from '@material-ui/core';

const InputEmail = () => {
    return (
        <InputAdornment position="start">
            <AccountBoxOutlinedIcon />
        </InputAdornment>
    )
}

export default InputEmail
