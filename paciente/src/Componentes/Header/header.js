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
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function Header() {
    const classes = styles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
      };
      
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };

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