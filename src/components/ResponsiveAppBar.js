import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {TiTick} from 'react-icons/ti';
import {VscCheck} from 'react-icons/vsc';
import {FcCheckmark} from 'react-icons/fc';
import {AiFillCaretRight} from 'react-icons/ai';


import asgbiLogo from '../assets/asgbi-logo.png';

import { createTheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import {green} from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';

import MobileMenuButton from './MobileMenuButton';


import NavMenu from './NavMenu';

const theme = createTheme({

  palette: {
    primary: {
      main: '#f8f8ff',
      text: '#191923',
      button: '#4CB944',
      backdrop: '#006DAA',
      buttonHover: '#84DD63'
    },
    secondary: {
      main: blue[900],
    },
  },
});

const ResponsiveAppBar = () => {

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" variant='outlined'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={asgbiLogo} alt="Logo" className="topLeftLogo" style={{padding:10, marginLeft:-10}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 200,
              letterSpacing: '.1rem',
              color: 'primary.main',
              textColor: 'primary.main',
              textDecoration: 'none',
              fontSize: 13,
              whiteSpace: 'pre-wrap', 
              overflowWrap: 'break-word',
              marginLeft: 5
            }}
          >
            Uniting Surgeons and
            Promoting Excellence in Surgery
                </Typography>
                <MobileMenuButton/>
              <Box sx={{ flexGrow: 1, marginLeft: 0, display: { xs: 'none', md: 'flex' } }}>
            <NavMenu sx={{ my: 2, color: 'white', display: 'block', typography: 'body2'}}/>
            <Button variant="outlined" sx={{ my: 2, marginRight:2, backgroundColor: 'primary.button', color: 'primary.text', display: 'block', typography: 'subtitle2', '&:hover': {backgroundColor: 'primary.buttonHover'}}}>
              Login<AiFillCaretRight style={{marginLeft: 0, paddingTop: 2}}></AiFillCaretRight>
            </Button>
            
            <Button sx={{ my: 2, backgroundColor: 'primary.button', color: 'primary.text', display: 'block', typography: 'subtitle2', '&:hover': {backgroundColor: 'primary.buttonHover'}}}>
              Join<AiFillCaretRight style={{marginLeft: 3, paddingTop: 2}}></AiFillCaretRight>
            </Button>

            
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
