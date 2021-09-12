import React from 'react';
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

import MenuIcon from '@material-ui/core/IconButton';


export default function Header() {
    const classes = styles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color="inherit" aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Pharma Inc
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}