import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import data from '../data.json';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'Extra long example'];
const pages = ['Home', 'Events & Webinars', 'Education', 'Awards & Fellowships', 'EGS', 'Research', 'EDI', 'Publications', 'Get Involved', 'Supporters', 'SIS'];

// const settings = ['profile', 'two'];
let pageNumber = 0;

const NavMenu = () => {

    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  
    const handleOpenMenu = (event) => {
      setAnchorElMenu(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorElMenu(null);
    };

    const setPageNumber = (page) => {
      pageNumber = page;
      console.log(pageNumber);
    }

    return (
        <Box sx={{ flexGrow: 1, marginLeft: -3, display: { xs: 'none', md: 'flex' } }}>
          <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(0);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[0].pageName} 
      </Button>
    <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(1);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[1].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(2);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[2].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(3);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[3].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(4);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[4].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(5);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[5].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(6);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[6].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(7);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[7].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(8);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[8].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(9);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[9].pageName} 
  </Button>
  <Button onClick={(event) => {handleOpenMenu(event);setPageNumber(10);}} sx={{my: 2, color: 'black', display: 'block', typography: 'body2'}}>
    {data[10].pageName} 
  </Button>

<Menu
  sx={{ mt: '45px'}}
  id="menu-appbar"
  anchorEl={anchorElMenu}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(anchorElMenu)}
  onClose={handleCloseMenu}
>

  {data[pageNumber].links.map((link) => (
    <MenuItem key={link}onClick={handleCloseMenu} sx={{my: 2, color: 'black', typography: 'body2'}}>
    <Typography textAlign="center">{link}</Typography>
  </MenuItem>
  ))}
</Menu>
</Box>
    )
}

export default NavMenu


