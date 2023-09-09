import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from '@mui/icons-material/LightMode';
const DrawerComp = ({ toggleDarkMode, isDarkMode }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { to: '/', label:'Home'},
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const navList = (
    <List>
      {navLinks.map((link) => (
        <ListItem key={link.label} component={Link} to={link.to}>
          <ListItemText primary={link.label} />
        </ListItem>
      ))}
    </List>
  );
  

  return (
    < div className='transparent-bar'> 
      <AppBar sx={{ background:isDarkMode?'#000':'#fff'}}>
      <Toolbar  >
        <IconButton edge="start" color='secondary' aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <h1 style={{textAlign:'center',fontFamily:`Georgia, 'Times New Roman', Times, serif`,color: isDarkMode ? "#fff" : "#000"}}>Reka Nagaraj</h1>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {navList}
          <IconButton
          edge="end"
          color="secondary"
          aria-label="toggle dark mode"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <LightModeIcon/> : <Brightness4Icon />}
        </IconButton>
           
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default DrawerComp;