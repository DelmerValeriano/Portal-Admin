import React from 'react'
import { useStyles } from "../styles";

const Icon = () => {
    const classes = useStyles();
    return (
        <div className={classes.iconoAppland}>
            <img src={`/assets/logoAppland.png`} alt="Appland"  />
        </div>
    )
}

export default Icon
