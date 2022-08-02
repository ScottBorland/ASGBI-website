import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import data from '../data.json';

const SimpleAccordion = () => {
  return (
        <Box sx={{ color: 'black', flexGrow: 1, display: { xs: 'block', md: 'none'} }}>
                {data.map((page) => (
                    <Accordion key={page.pageName}>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                         >
                        <Typography>{page.pageName}</Typography>
                    </AccordionSummary>
        <AccordionDetails>
        {page.links.map((link) => (
            <Button key={link}sx={{ color: 'black', flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
            {link}
               </Button>
            
        ))}
        </AccordionDetails>
        </Accordion>
                ))}
          

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Button sx={{ color: 'black', flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
            Sample button
          </Button>
        </AccordionDetails>
      </Accordion> */}
      
      </Box>
  );
}

export default SimpleAccordion;
