import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBarNav, List } from "../../organisms";
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
}));

const Nav = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBarNav />
            <List />
        </div>
    );
}
export default Nav