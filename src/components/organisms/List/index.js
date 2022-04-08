import React from 'react'
import { ItemIcon } from '../../molecules'
import { useStyles, List, Toolbar, Divider, Drawer } from '../styles'

const Item = () => {
    const classes = useStyles();

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.root1}
                    >
                        <ItemIcon />
                    </List>
                    <Divider />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
            </main>
        </>
    )
}

export default Item
