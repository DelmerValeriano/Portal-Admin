import React, { memo } from 'react'
import ListItemText from '@material-ui/core/ListItemText';

const Text = memo(({ text }) => {
    return (
        <ListItemText primary={text} />
    )
});

export default Text
