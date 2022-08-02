import '../App.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import PrimarySearchAppBar from '../components/SampleAppBar';
import Slideshow from '../components/Slider';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const Homepage = () => (
    //<ResponsiveAppBar/>
    <AppBar position='static'>
    
      <ResponsiveAppBar></ResponsiveAppBar>
    <Slideshow/>
   
    </AppBar>
)

export default Homepage