import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import {green} from '@mui/material/colors';
import { Typography } from '@mui/material';

import {BrowserRouter as Router, Link} from 'react-router-dom';

const LinkCards = () => {

    const theme = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: "body2"
                        },
                        style: {
                            fontSize: 18,
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
                            fontSize: 30,
                        }
                    },
                    {
                        props: {
                            variant: "h2"
                        },
                        style: {
                            fontSize: 22,
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
        },
        palette: {
          primary: {
            main: blue[500],
          },
          secondary: {
            main: green[900],
          },
        },
      });

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={10} justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={10} marginLeft={20} marginRight={20}>
                <Grid item xs={3.5}>
                    <Box>
                        <Paper elevation={10}>
                            <Typography variant='h2' textAlign={'center'}>EGS Symposium 2022</Typography>
                            <Link to="">
                            <img style={{width: '100%',
                                height: "auto",
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                  src='https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg'></img>
                  </Link>
                  <Typography variant='body2' textAlign={'center'}>Registration is now open for the EGS 2022 Symposium. To register or view the programme please <a href="/about/about_team.htm"> click here</a></Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={3.5}>
                <Box>
                        <Paper elevation={10}>
                            <Typography variant='h2' textAlign={'center'}>ASGBI Award & Fellowship Opportunities</Typography>
                            <Link to="">
                            <img style={{width: '100%',
                                height: "auto",
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                  src='https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'></img>
                  </Link>
                  <Typography variant='body2' marginLeft={4}textAlign={'center'}>There's still time to apply for the Best New Surgical Innovation Award. More information <a href="/about/about_team.htm"> here</a></Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={3.5}>
                <Box>
                        <Paper elevation={10}>
                            <Typography variant='h2' textAlign={'center'}>EGS Symposium 2022</Typography>
                            <Link to=''>
                            <img style={{width: '100%',
                                height: "auto",
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                  src='https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg'></img>
                  </Link>
                  <Typography variant='body2' textAlign={'center'}>Registration is now open for the EGS 2022 Symposium. To register or view the programme please <a href="/about/about_team.htm"> click here</a></Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default LinkCards
