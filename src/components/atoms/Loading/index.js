import React from 'react';
import { useStyles, CircularProgress } from "../styles";

const CircularIndeterminate = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}

export default CircularIndeterminate