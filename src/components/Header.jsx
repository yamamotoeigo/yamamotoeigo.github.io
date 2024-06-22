import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDrawerLinkClick = (section) => {
    setDrawerOpen(false);
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }, 300); // ドロワーが閉じるのを待つための遅延
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['introduction', 'aboutme', 'techstack', 'projects', 'links'].map((section, index) => (
          <ListItem button key={section} onClick={() => handleDrawerLinkClick(section)}>
            <ListItemText primary={section === 'introduction' ? '自己紹介' : section === 'aboutme' ? 'ひとこと' : section === 'techstack' ? '技術スタック' : section === 'projects' ? '作ったもの' : '各種リンク'} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <div className="desktop-menu">
          <Button color="inherit">
            <ScrollLink to="introduction" smooth={true} duration={500} offset={-70}>
              自己紹介
            </ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="aboutme" smooth={true} duration={500} offset={-70}>
              ひとこと
            </ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="techstack" smooth={true} duration={500} offset={-70}>
              スキル
            </ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
              成果物
            </ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="links" smooth={true} duration={500} offset={-70}>
              各種リンク
            </ScrollLink>
          </Button>
        </div>
        <div className="mobile-menu">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
