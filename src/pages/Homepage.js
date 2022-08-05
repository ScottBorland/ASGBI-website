import '../App.css';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import PrimarySearchAppBar from '../components/SampleAppBar';
import MainTextCard from '../components/MainTextCard';
import LinkCards from '../components/LinkCards';
import NewsSection from '../components/NewsSection';
import LogoList from '../components/LogoList';


import Slideshow from '../components/Slider';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';

import {blue} from '@mui/material/colors';


const theme = createTheme({

    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        main: blue[900],
      },
    },
  });

const Homepage = () => (

    <AppBar position='static'>
        <ThemeProvider theme={theme}>
            
            <ResponsiveAppBar/>

            <Slideshow/>

            <MainTextCard/>
        
            <LinkCards/>

            <NewsSection/>
            
            <LogoList/>
         
        </ThemeProvider>
    </AppBar>
)

export default Homepage