import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import TwitterContainer from './TwitterFeed';
import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';

const NewsSection = () => {
    const theme4 = createTheme({
        palette: {
            primary: {
              main: '#FFFDF7',
              text: '#161925',
              button: '#AD7A99',
              backdrop: '#006DAA'
            },

          },
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: "subtitle2"
                        },
                        style: {
                            textAlign: 'center',
                            fontSize: 20,
                            marginLeft: 4
                        }
                    },
                    {
                        props: {
                            variant: "subtitle1"
                        },
                        style: {
                            fontSize: 35,
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
                            variant: "body1"
                        },
                        style: {
                            fontSize: 20,
                            color: 'primary.text',
                            fontWeight: 200
                        }
                    },
                    {
                        props: {
                            variant: "body2"
                        },
                        style: {
                            fontSize: 18
                        }
                    }
                ]
            }
        }
      });
    return (
        <ThemeProvider theme={theme4}>
        <Box backgroundColor={theme4.palette.primary.backdrop}>
            <Grid container spacing={10} justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }} marginTop={4} marginLeft={20} marginRight={20} marginBottom={8}>
                <Grid item xs={5}>
                    <Box>
                    <Typography marginBottom={4} textAlign='center' color='primary.text' variant='h4'>Tweets from @ASGBI</Typography>
                    <Paper elevation={3} padding={5}>
                    <TwitterContainer/>
                    </Paper>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box padding={0}>
                    <Typography marginBottom={4} textAlign='center' color='primary.text' variant='h4' marginBotton={8}>What's New...</Typography>
                        <Paper  elevation={2} mr={2} padding={5}>
                            <Typography color='primary.text' marginLeft={3} marginRight={3}variant='subtitle2'>National Confidential Enquiry into Patient Outcome and Death - Newsletter May 2022</Typography>

                            <Typography color='primary.text' variant='body1' marginLeft={3}> • You will find information about our latest reports and current studies.</Typography>
                            <Typography color='primary.text' variant='body1' marginLeft={3}> • There are new dates for Local Reporter and Ambassador days<a href=""> Full Story...</a></Typography>
                            
                            <Typography color='primary.text' textAlign='center' variant='body2'>Wednesday, May 25th 2022</Typography>

                            <Typography> &nbsp;</Typography>

                            <Typography color='primary.text' variant='subtitle2'>JCST - CESR under the 2021 Curriculum</Typography>
                            <Typography color='primary.text' variant='body2' marginLeft={3}>On 8 November 2021 October JCST held a webinar about CESR under the 2021 Curriculum. They now have a video on the JCST website and some FAQs which came out of the webinar</Typography>
                            <Typography marginLeft={3}><a href=""> Full Story...</a></Typography>
                            <Typography color='primary.text' textAlign='center' variant='body2'>Friday, April 8th 2022</Typography>
                            <Typography>&nbsp;</Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>
    )
}

export default NewsSection
