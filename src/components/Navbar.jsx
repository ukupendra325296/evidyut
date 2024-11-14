import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const buttonStyle = {
    marginRight: '1rem',
    padding: '8px 16px',
    borderRadius: '4px',
    color: 'black',
    '&:hover': {
      backgroundColor: 'green',
      color: 'white',
    },
  };

  return (
    <AppBar sx={{ height: 60, background: 'white', boxShadow: 1 }}>
      <Toolbar sx={{ color: 'black' }}>
        <Typography sx={{ flexGrow: 1 }}>
          <img src="logo2.png" alt="Logo" height="28px" />
        </Typography>
        
        
        <Button sx={buttonStyle} href="/">
          Home
        </Button>
        
        <Button sx={buttonStyle} onClick={handleMenuOpen}>
          Products
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {['RetroKit®', 'Diagnostix', 'Instrument Cluster', 'EV Lab Equipments'].map((item) => (
            <MenuItem key={item} onClick={handleMenuClose}>{item}</MenuItem>
          ))}
        </Menu>

        <a href="/about"><Button sx={buttonStyle} href="/About">
          About 
        </Button>      </a>
        
       <a href="/career"> <Button sx={buttonStyle} href="/Career">
          Career
        </Button></a>
    
        
        <Button sx={buttonStyle} href="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}
