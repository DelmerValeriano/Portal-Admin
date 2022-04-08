import React from 'react'
import { TextDialog } from '../../atoms'
import { DialogLogOut } from '../../molecules'
import { Dialog } from "./styles";

const CloseSesion = ({ setConfirmSignOut, confirmSignOut, titleOut, btnOut, align }) => {
    const handleClose = () => {
        setConfirmSignOut(false);
    };
    return (
        <Dialog
            open={confirmSignOut}
            onClose={handleClose}
        >
            <TextDialog titleOut={titleOut} align={align} />
            <DialogLogOut confirmSignOut={confirmSignOut} btnOut={btnOut} />
        </Dialog>
    )
}

export default CloseSesion
