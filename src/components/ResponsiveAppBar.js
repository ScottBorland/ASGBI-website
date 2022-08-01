import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {TiTick} from 'react-icons/ti';
import {VscCheck} from 'react-icons/vsc';
import {FcCheckmark} from 'react-icons/fc'


import asgbiLogo from '../assets/asgbi-logo.png';

import { createTheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';

import MobileMenuButton from './MobileMenuButton';


import NavMenu from './NavMenu';

const theme = createTheme({

  palette: {
    primary: {
      main: '#ffff',
    },
    secondary: {
      main: blue[900],
    },
  },
});

const ResponsiveAppBar = () => {

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={asgbiLogo} alt="Logo" className="topLeftLogo"/>
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
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 12,
              whiteSpace: 'pre-wrap', 
              overflowWrap: 'break-word',
              marginLeft: 5
            }}
          >
            Uniting Surgeons and
            Promoting Excellence in Surgery
                </Typography>
                <MobileMenuButton/>
              <Box sx={{ flexGrow: 1, marginLeft: 5, display: { xs: 'none', md: 'flex' } }}>
            <NavMenu sx={{ my: 2, color: 'black', display: 'block', typography: 'body2'}}/>
            <Button variant="outlined" sx={{ my: 2, color: 'blue', display: 'block', typography: 'subtitle2'}}>
              Login
            </Button>
            
            <Button sx={{ my: 2, color: 'blue', display: 'block', typography: 'subtitle2'}}>
              Join 
            </Button>

            
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
