import React, { useState } from 'react'
import { TextDialog } from '../../atoms'
import { DialogAction, DialogContent } from '../../molecules'
import { Dialog } from "./styles";
import Typography from '@material-ui/core/Typography';

const DeleteGroup = ({ idUser, openDelete, setOpenDelete, removed, setUser, setError }) => {
    const [message, setMessage] = useState('');
    return (
        <Dialog
            open={openDelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <TextDialog text={"Ventana de confirmación"} />
            <DialogContent />
            <DialogAction openDelete={openDelete} setOpenDelete={setOpenDelete} idUser={idUser} removed={removed} setUser={setUser} setError={setError} setMessage={setMessage} />
            {
                message ?
                    <Typography variant="subtitle" align={'justify'} color={'error'} >{message}</Typography>
                    :
                    null
            }
        </Dialog>
    )
}

export default DeleteGroup
