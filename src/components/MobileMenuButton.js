import React from 'react';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SimpleAccordion from './MenuAccordion';


const MobileMenuButton = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const pages = ['sample1', 'sample2', 'sample3'];


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return (
        <Box sx={{ color: 'black', flexGrow: 1, display: { xs: 'flex', md: 'flex'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: 'black', flexGrow: 1, display: { xs: 'flex', md: 'none'}}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <SimpleAccordion/>
            </Menu>
          </Box>
    )
}

export default MobileMenuButton


