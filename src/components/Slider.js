import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Box from '@mui/material/Box';

import BannerImage from '../images/Banner1.png';
import BannerImage2 from '../images/Banner2.png';
import BannerImage3 from '../images/Banner3.png';

import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {GrLinkNext} from 'react-icons/gr';

import { createTheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

import '../App.css'

const slideImages = [
  {
    url: 'https://images.news18.com/ibnlive/uploads/2022/01/fresh-fruits.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.news18.com/ibnlive/uploads/2022/01/fresh-fruits.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.news18.com/ibnlive/uploads/2022/01/fresh-fruits.jpg',
    caption: 'Slide 3'
  },
];

const BannerImages = [BannerImage, BannerImage2, BannerImage3];

const theme = createTheme({

    palette: {
      primary: {
        main: '#ffff',
      },
      secondary: {
        main: blue[900],
      },
    },
    // Media: {
    //     height: 550,
    //     width: '100%',
    //     objectFit: 'cover'
    //   }
  });

const Slideshow = () => {
    return (
      <div className="sliderBackground" style={{ marginTop: 7}}>
        <ThemeProvider theme={theme}>
        <Slide easing="ease" nextArrow={<AiOutlineArrowRight size={25} style={{
      position: 'absolute',
      marginRight: '10',
      scale: 5
    }}/>} prevArrow={<AiOutlineArrowLeft size={25}  style={{
        position: 'absolute',
        marginLeft: '10',
        scale: 5
      }}/>}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
                <img style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "180"
                  }}src={BannerImages[index]}></img>
                
            </div>
          ))} 
        </Slide>
        </ThemeProvider>
      </div>
    )
}

export default Slideshow