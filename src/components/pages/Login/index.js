import React from 'react'
import { FormLogin } from '../../organisms'
import { useStyles, Container, CssBaseline } from '../styles'

const Login = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className={classes.containerLogin}>
            <CssBaseline />
            <FormLogin />
        </Container>
    )
}

export default Login