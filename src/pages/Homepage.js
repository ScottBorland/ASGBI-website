import '../App.css';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import PrimarySearchAppBar from '../components/SampleAppBar';
import MainTextCard from '../components/MainTextCard';
import LinkCards from '../components/LinkCards';


import Slideshow from '../components/Slider';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';

import {blue} from '@mui/material/colors';

import GlobalStyles from "@mui/material/GlobalStyles";

const theme = createTheme({

    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

const Homepage = () => (

    <AppBar position='static'>
        <ThemeProvider theme={theme}>
            <GlobalStyles
                 styles={{
                body: { backgroundColor: "white" }
                }}
            />
            <ResponsiveAppBar/>

            <Slideshow/>

            <MainTextCard/>
        
            <LinkCards/>
            <LinkCards/>
        </ThemeProvider>
    </AppBar>
)

export default Homepage