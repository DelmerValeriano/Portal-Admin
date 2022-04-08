import React from 'react'
import { Button, useStyles } from "../styles";

const ButtonInicioSesion = ({ value, name, submit, outlined, handleClose, contained, functionCreateUpdateDeleteClose, size, confirm, variant, textSales, loading, color }) => {
    const classes = useStyles();
    return (
        <Button
            type={submit}
            fullWidth
            variant={contained || outlined || variant}
            onClick={handleClose || functionCreateUpdateDeleteClose || confirm}
            className={classes.submit}
            size={size}
            disabled={loading}
            color={color}
        >
            {value || name || textSales}
        </Button >
    )
}

export default ButtonInicioSesion
