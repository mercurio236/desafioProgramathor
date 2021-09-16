import React,{ useEffect} from 'react';
import styles from './styles';
import {
    Toolbar,
    AppBar,
    Typography,
    FormGroup,
    FormControlLabel,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { pacientes } from '../../Pages/Pacientes/Redux/PacienteActions';
import api from '../../Connections/api';


import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalConvenienceStore from '@material-ui/icons/LocalConvenienceStore';

export default function Header() {
    const classes = styles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()


    const handleClose = () => {
        setAnchorEl(null);
    };

    async function reqPacientes(){
        await api.get('/api/?results=40')
        .then((res) => {
            dispatch(pacientes(res.data))
        })
        .catch((err) => {
            console.log(`Erro: ${err}`)
        })
    }

    useEffect(() => {
        reqPacientes()
    },[])





    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color="inherit" aria-label='menu'>
                        <LocalConvenienceStore style={{ fontSize: 40 }} />
                    </IconButton>

                    <Typography variant='h6' className={classes.title}>
                        Pharma Inc
                    </Typography>
                    <AccountCircle />
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}