import React from 'react'
import { InputAdornment } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const InputAccount = () => {
    return (
        <InputAdornment position="start">
            <MailOutlineIcon />
        </InputAdornment>
    )
}

export default InputAccount
