import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { IconUser, ItemText, IconHome, IconOther1, IconOther2, ExpandLess, ExpandMore } from '../../atoms'
import { useStyles, ListItemIcon, ListItem, List, Collapse } from '../styles'

const Item = () => {
    const classes = useStyles();
    const history = useHistory();
    let location = useLocation();
    const [paginaSelecionada, setPaginaSelecionada] = useState('');
    const [openClip, setOpenClip] = useState(false);

    useEffect(() => {
        setPaginaSelecionada(location.pathname);
    }, [location.pathname])

    const handleClick = () => {
        setOpenClip(!openClip);
    };

    return (
        <>
            <ListItem button onClick={() => history.push(`/Home`)}
                selected={paginaSelecionada === '/Home' ? true : false}>
                <ListItemIcon>
                    <IconHome />
                </ListItemIcon>
                <ItemText text={"Home"} />
            </ListItem>
            <ListItem button onClick={() => history.push(`/TableUser`)}
                selected={paginaSelecionada === '/TableUser' ? true : false}>
                <ListItemIcon>
                    <IconUser />
                </ListItemIcon>
                <ItemText text={"Usuarios"} />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <IconOther1 />
                </ListItemIcon>
                <ItemText text={"Inbox"} />
                {openClip ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openClip} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <IconOther2 />
                        </ListItemIcon>
                        <ItemText text={"Starred"} />
                    </ListItem>
                </List>
            </Collapse>
        </>

    )
}

export default Item