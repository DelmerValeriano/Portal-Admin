import React, { memo, useContext } from 'react'
import { Button } from '../../atoms'
import { DialogActions, useStyles } from "../styles"
import { types } from "../../commons/type";
import { FirebaseContext } from '../../../firebase';
const Action = memo(() => {
    const { firebase, dispatch } = useContext(FirebaseContext);
    const classes = useStyles();
    const confirm = () => {
        dispatch({
            type: types.logout
        });
        firebase.auth.signOut();
        localStorage.clear();
    }

    return (
        <div className={classes.dialogWidthOut}>
            <DialogActions className={classes.dialogWidthOut}>
                <Button color={"secondary"} name={"Confirmar"} outlined={"contained"} size={"small"} confirm={confirm} />
            </DialogActions>
        </div>
    )
});

export default Action
