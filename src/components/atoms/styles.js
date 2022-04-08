import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        marginTop: 20,
        marginBottom: 20
    },
    containerLogin: {
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
    },
    iconoAppland: {
        marginTop: 20,
    },
    title: {
        flexGrow: 1,
    },
    email: {
        marginRight: 10
    },
    root: {
        marginTop: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}));

export {
    useStyles,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    LockOutlinedIcon,
    Container,
    Typography,
    Box,
    CircularProgress,
    DialogTitle
}