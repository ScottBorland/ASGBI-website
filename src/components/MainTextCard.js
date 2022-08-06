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

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 23,
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
                        color: 'green',
                        fontWeight: 800
                    }
                },
                {
                    props: {
                        variant: "h5"
                    },
                    style: {
                        fontSize: 18,
                        fontWeight: 600
                    }
                }
            ]
        }
    }
})

const MainTextCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box backgroundColor={'GhostWhite'}>
            <Grid container spacing={10} direction={'row'} justifyContent={'center'} marginTop={0} marginBottom={5}>
            <Grid item xs={7}>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                }}
    >
                <Paper elevation={10} sx={{padding:5}} >
                        <Typography marginTop={4} marginLeft={3} marginRight={3} textAlign={'center'} variant="h3">Welcome to the ASGBI</Typography>
                        <Typography marginTop={2} marginLeft={3} marginRight={3} textAlign={'center'} variant="h2">Association of Surgeons of Great Britain & Ireland</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body2">ASGBI is the statutory organisation representing general surgeons in the UK and Ireland. The Association was established in 1920 and has a long history of providing information, advice, opportunities for further education and networking for its members. It provides leadership in general and emergency surgery and collates sub-specialist knowledge from 12 sister organisations who comprise modern general surgery.</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body2">The founding objectives of the Association, were twofold – the advancement of the science and art of surgery and the promotion of friendship amongst surgeons; these objectives remain the same today. ASGBI actively pursues inclusive policies. Further details are available <a href="/about/about_team.htm">here</a></Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="subtitle1">The Association is a strategic partner of the BJS Society.<img style={{
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
                }}
    >
                <Paper elevation={5} >
                    <Button color="success" variant='outlined'sx={{  color: 'black', display: 'block', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white'}}>
                        <Typography justifyContent={'center'} marginTop={4} marginLeft={9} marginRight={3} textAlign={'center'} variant="h1">Join the ASGBI<img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg' style={{width: 25,
                    height: "auto",
                    marginLeft: 15
                  }}></img></Typography>
                    </Button>
                        <Typography marginTop={2} marginLeft={3} marginRight={3} textAlign={'center'} variant="h5">ASGBI now offers a pay monthly option and members can join from as little as £7.50 per month.</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body2">Members receive a full range of benefits and services, including:</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body1"><TiTick/>Discounts for ASGBI Congresses and other events</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body1"><TiTick/>Access to the E-Learning Platform</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body1"><TiTick/>Grants and Fellowships</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body1"><TiTick/>Online directory of ASGBI publications</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body1"><TiTick/>Free CME/CPD accreditation for courses & meetings</Typography>
                        <Typography marginTop={3} marginLeft={3} marginRight={3} variant="body1"><a href="">Click here </a>to view a full list of member benefits</Typography>
                </Paper>
                
            </Box>
            </Grid>
            </Grid>
            </Box>
    </ThemeProvider>
    )
}

export default MainTextCard
