import React from 'react'
import { DialogTitle } from "../styles";
const Title = ({ text, title, titleOut, align }) => {
    return (
        <DialogTitle id="form-dialog-title" align={align}>{title || text || titleOut}</DialogTitle>
    )
}

export default Title
