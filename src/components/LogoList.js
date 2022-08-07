import React from 'react';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';

import logo1 from '../logos/baxter.png';
import logo2 from '../logos/bd.png';
import logo3 from '../logos/EIDO-Healthcare.gif';
import logo4 from '../logos/ethicon2.png';
import logo5 from '../logos/incision-logo.png';
import logo6 from '../logos/intuitive.gif';
import logo7 from '../logos/nihr-logo.gif';
import logo8 from '../logos/3m.png';
import { Typography } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';



const itemData = [
    {
        title: 'BD',
        img: logo2,
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/BD_%28company%29_logo.svg/1200px-BD_%28company%29_logo.svg.png'
    },
    {
        title: 'Baxter',
        img: logo1,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Baxter.svg/2560px-Baxter.svg.png'
    },
    {
        title: 'EIDO-Healthcare',
        img: logo3,
        url: 'https://www.eidohealthcare.com/app/uploads/2020/08/EIDO-Logo-2.jpg'
    },
    {
        title: 'ethicon',
        img: logo4,
        url: 'https://www.drugwatch.com/wp-content/uploads/Ethicon-Feature.png'
    },
    {
        title: 'incision',
        img: logo5,
        url: 'https://worldsummit.ai/wp-content/uploads/sites/4/2021/06/Incision.png'
    },
    {
        title: 'intuitive',
        img: logo6,
        url: 'https://www.intuitive.com/en-us/-/media/ISI/Intuitive/Card/Press-Resources/intuitive-logo-black-1060874-low-res-.png'
    },
    {
        title: 'nihr',
        img: logo7,
        url: 'https://cambridgebrc.nihr.ac.uk/wp-content/uploads/2019/04/National-Institute-for-Health-Research_logo_outlined_RGB_COL-2.png'
    },
    {
        title: '3m',
        img: logo8,
        url: 'https://www.3m.co.uk/wps/wcm/connect/391f000e-c6b3-480e-9ea5-ebe33c7b0cb0/1/3M_Lockup.jpg?MOD=AJPERES'
    }
]

const LogoList = () => {
    const theme = createTheme({
        palette: {
            primary: {
              main: '#f8f8ff',
              text: '#191923',
              button: '#006DAA'
            },
          },
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: "h2"
                        },
                        style: {
                            textAlign: 'center',
                            fontSize: 25
                        }
                    }
                ]
            }
        }
      });
    return (
        <ThemeProvider theme={theme}>
        <Box backgroundColor={'white'}>
            <Typography textAlign='center' marginBottom={1} marginTop={4} variant='h2' color='primary.text' paddingBottom={2}>Strategic Business Collaborators</Typography>
            <Box display={'flex'} flexWrap={'wrap'}>
            <img src={itemData[0].url} style={{width: 140, height: 50, marginRight: 50, marginLeft: 20, marginTop: 15}}></img>
            <img src={itemData[1].url} style={{width: 140, height: 40, marginRight: 50, marginTop:19}}></img>
            <img src={itemData[2].url} style={{width: 140, height: 50, marginTop: 15}}></img>
            <img src={logo4} style={{width: 200, height: 130, marginTop: -25, padding: 5}}></img>
            <img src={itemData[4].url} style={{width: 140, height: 40, marginTop: 15, marginLeft: 17}}></img>
            <img src={itemData[5].url} style={{width: 220, height: 140, marginTop: -30}}></img>
            <img src={itemData[6].url} style={{width: 200, height: 70, marginTop: 4}}></img>
            <img src={itemData[7].url} style={{width: 170, height: 120, marginTop: -17}}></img>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default LogoList


