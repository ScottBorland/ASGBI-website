import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import bjsLogo from '../images/bjs-logo.jpg';

import {TiTick} from 'react-icons/ti';

import { grid } from '@mui/system';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#f8f8ff',
            text: '#191923',
            button: '#4CB944',
            backdrop: '#006DAA',
            buttonBackground: '#23CE6B',
            buttonHover: '#84DD63'
        },

      },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 20,
                    }
                },
                {
                    props: {
                        variant: "subtitle1"
                    },
                    style: {
                        fontSize: 18,
                    }
                },
                {
                    props: {
                        variant: "h3"
                    },
                    style: {
                        fontSize: 35,
                        fontWeight: 800
                    }
                },
                {
                    props: {
                        variant: "h2"
                    },
                    style: {
                        fontSize: 30,
                    }
                },
                {
                    props: {
                        variant: "h1"
                    },
                    style: {
                        fontSize: 28,
                        fontWeight: 800
                    }
                },
                {
                    props: {
                        variant: "h5"
                    },
                    style: {
                        fontSize: 19,
                        fontWeight: 400
                    }
                }
            ]
        }
    }
})

const MainTextCard = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box backgroundColor={customTheme.palette.primary.backdrop}>
            <Grid backgroundColor={'primary.backdrop'} container spacing={10} direction={'row'} justifyContent={'center'} marginTop={0} marginBottom={5}>
            <Grid item xs={7} backgroundColor={'primary.backdrop'}>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' }
                }}
    >
                <Paper elevation={10} sx={{padding:5, backgroundColor:'primary.main'}} >
                        <Typography color={'primary.text'} marginTop={4} marginLeft={3} marginRight={3} textAlign={'center'} variant="h3">Welcome to the ASGBI</Typography>
                        <Typography color={'primary.text'} marginTop={2} marginLeft={3} marginRight={3} textAlign={'center'} variant="h2">Association of Surgeons of Great Britain & Ireland</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={3} marginRight={3} variant="body2">ASGBI is the statutory organisation representing general surgeons in the UK and Ireland. The Association was established in 1920 and has a long history of providing information, advice, opportunities for further education and networking for its members. It provides leadership in general and emergency surgery and collates sub-specialist knowledge from 12 sister organisations who comprise modern general surgery.</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={3} marginRight={3} variant="body2">The founding objectives of the Association, were twofold – the advancement of the science and art of surgery and the promotion of friendship amongst surgeons; these objectives remain the same today. ASGBI actively pursues inclusive policies. Further details are available <a href="/about/about_team.htm">here</a></Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={3} marginRight={3} variant="subtitle1">The Association is a strategic partner of the BJS Society.<img style={{
                    width: 100,
                    height: "auto",
                    marginLeft: 70,
                    marginTop: 25,
                  }}src={bjsLogo}></img></Typography>
                </Paper>
                
            </Box>
            </Grid>
            <Grid item xs={4}>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    padding: 0
                }}
    >
                <Paper elevation={5} sx={{backgroundColor: 'primary.main'}}>
                    <Button padding={5}  sx={{ color: 'primary.backdrop', display: 'block', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'primary.button', '&:hover': {
      backgroundColor: 'primary.buttonHover',
      color: '#3c52b2',
  }}}>
                        <Typography color={'primary.text'} padding={0} justifyContent={'center'} marginTop={3} marginBottom={3} marginLeft={9} marginRight={3} textAlign={'center'} variant="h3">Join the ASGBI<img src='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' style={{width: 35,
                    height: "auto",
                    marginLeft: 15
                  }}></img></Typography>
                    </Button>
                        <Typography color={'primary.text'} marginTop={2} marginLeft={5} marginRight={5} textAlign={'center'} variant="h5">Monthly memberships from £7.50</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2">Members receive a full range of benefits and services, including:</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Discounts for ASGBI Congresses and other events</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Access to the E-Learning Platform</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Grants and Fellowships</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Online directory of ASGBI publications</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Free CME/CPD accreditation for courses & meetings</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} marginBottom={2} variant="body2"><a href="">Click here </a>to view a full list of member benefits</Typography>
                </Paper>
                
            </Box>
            </Grid>
            </Grid>

            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    width: '100%',
                    padding: 2
                }}
            >
                 <Paper elevation={10} sx={{marginTop: -14, backgroundColor:'primary.main', width: '100%'}} >
                        <Typography color={'primary.text'} marginTop={4} marginLeft={3} marginRight={3} textAlign={'center'} variant="h3">Welcome to the ASGBI</Typography>
                        <Typography color={'primary.text'} marginTop={2} marginLeft={3} marginRight={3} textAlign={'center'} variant="h2">Association of Surgeons of Great Britain & Ireland</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={3} marginRight={3} variant="body2">ASGBI is the statutory organisation representing general surgeons in the UK and Ireland. The Association was established in 1920 and has a long history of providing information, advice, opportunities for further education and networking for its members. It provides leadership in general and emergency surgery and collates sub-specialist knowledge from 12 sister organisations who comprise modern general surgery.</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={3} marginRight={3} variant="body2">The founding objectives of the Association, were twofold – the advancement of the science and art of surgery and the promotion of friendship amongst surgeons; these objectives remain the same today. ASGBI actively pursues inclusive policies. Further details are available <a href="/about/about_team.htm">here</a></Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={3} marginRight={3} variant="subtitle1">The Association is a strategic partner of the BJS Society.<img style={{
                    width: 100,
                    height: "auto",
                    marginLeft: 70,
                    marginTop: 25,
                  }}src={bjsLogo}></img></Typography>
                </Paper>

            </Box>

            <Box sx={{display: {xs:'flex', md: 'none'}, width: '100%', padding: 2}}>
            <Paper elevation={5} sx={{backgroundColor: 'primary.main'}}>
                    <Button padding={5}  sx={{ color: 'primary.backdrop', display: 'block', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'primary.button', '&:hover': {
      backgroundColor: 'primary.buttonHover',
      color: '#3c52b2',
  }}}>
                        <Typography color={'primary.text'} padding={0} justifyContent={'center'} marginTop={3} marginBottom={3} marginLeft={9} marginRight={3} textAlign={'center'} variant="h3">Join the ASGBI<img src='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' style={{width: 35,
                    height: "auto",
                    marginLeft: 15
                  }}></img></Typography>
                    </Button>
                        <Typography color={'primary.text'} marginTop={2} marginLeft={5} marginRight={5} textAlign={'center'} variant="h5">Monthly memberships from £7.50</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2">Members receive a full range of benefits and services, including:</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Discounts for ASGBI Congresses and other events</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Access to the E-Learning Platform</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Grants and Fellowships</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Online directory of ASGBI publications</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} variant="body2"><TiTick/>Free CME/CPD accreditation for courses & meetings</Typography>
                        <Typography color={'primary.text'} marginTop={3} marginLeft={5} marginRight={5} marginBottom={2} variant="body2"><a href="">Click here </a>to view a full list of member benefits</Typography>
                </Paper>
            </Box>
            

            </Box>
    </ThemeProvider>
    )
}

export default MainTextCard
