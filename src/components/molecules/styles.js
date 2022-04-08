import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Toolbar from '@material-ui/core/Toolbar';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { blue } from '@material-ui/core/colors';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

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
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
    },
    email: {
        marginRight: 10
    },
    root2: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    wrapper: {
        margin: theme.spacing(2),
        position: 'relative',
    },
    buttonProgress: {
        color: blue[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    dialogWidth:{
        width: 390
    },
    dialogWidthOut:{
        width: 360,
        height: 120
    },
    avatarLogin:{
        marginRight: 10
    }
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
    Snackbar,
    ListItemIcon,
    ListItem,
    List,
    Collapse,
    Toolbar,
    DialogActions,
    DialogContent,
    RecentActorsIcon
}