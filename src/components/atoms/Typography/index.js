import React from 'react'
import { Typography } from "../styles";
const Title = ({ name, variant, noWrap, classes }) => {
    return (
        <Typography variant={variant} noWrap={noWrap} className={classes}>
            {name}
        </Typography>
    )
}

export default Title
