import React from 'react'
import { ToolbarNav } from "../../molecules";
import { useStyles } from "../styles"
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <ToolbarNav />
            </AppBar>
        </>
    )
}

export default App
