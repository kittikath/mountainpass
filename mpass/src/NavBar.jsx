import React from 'react';
import logo from './assets/icon.png';
import avatar from './assets/nickgrealy_1.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './App.css';
import { Avatar } from '@mui/material';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#FFFFFF', boxShadow: '0px 4px 5px 0px rgb(0 0 0 / 5%)' }}>
        <Toolbar>
            <IconButton
                sx={{ mx: 2, width: 32, height: 32 }}
                edge="start"
                aria-label="menu"
            >
                <img
                    style={{height: '32px', width: '32px', margin: '15px'}}
                    src={logo}
                    alt="logo"
                    loading="lazy"
                />
            </IconButton>
            <Typography variant="h6" color="#000000" component="div" sx={{ flexGrow: 1, fontWeight: 500 }}>
                ZipDrop
            </Typography>
            <Typography variant="p" sx={{ color: '#000000' }}>Nick Grealy</Typography>
            <IconButton
                sx={{ mx: 2, width: 32, height: 32 }}
                edge="end"
                aria-label="avatar"
            >
                <Avatar
                    style={{height: '32px', width: '32px', margin: '15px'}}
                    src={avatar}
                    alt="Nick Grealy"
                    loading="lazy"
                />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
