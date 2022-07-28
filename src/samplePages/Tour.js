import { Typography } from "@mui/material";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import QuiltedImageList from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion"

const Tour = () => <Container sx={{width:900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas 
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024" alt="" height={325}/>
        <QuiltedImageList/>
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
        Sample text
    </Typography>
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
    </Typography>
    <CustomizedAccordions/>
    </Box>
</Container>

export default Tour;