import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

const AlertSnack = ({ message, handleClose }) => {

  const Alert = (props) => {
    return <MuiAlert elevation={3} variant="filled" {...props} />;
  }
  return (
    <Alert onClose={handleClose} severity="error" >
      {message}
    </Alert >)

}

export default AlertSnack
