import { Typography, Grid, Stack, Box, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

import MyCard from "../components/CardLayout.jsx";
import Transport from "../assets/service/transport.jpg";
import Energy from "../assets/service/energy.jpg";
import Healthcare from "../assets/service/healthcare.jpg";
import Safety from "../assets/service/safety.jpg";
import Education from "../assets/service/education.jpg";
import Waste from "../assets/service/waste.jpg";


const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[500],
    },
  },
});

function Service() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Typography variant="h4" component="h4" textAlign="center">
          smart city services
        </Typography>
        <Divider sx={{ bgcolor: "gray" }} />
        {/* <Container maxWidth="lg">
          <MyCarousel />
        </Container> */}
        {/* <MyCarousel /> */}
        <Grid container rowSpacing={4} columnSpacing={2} padding={4}>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <MyCard
                header="Smart Transportation"
                point1="Real-time public transit tracking and scheduling systems."
                point2="Intelligent traffic management systems to optimize traffic flow and reduce congestion."
                point3="Smart parking solutions, including parking availability notifications and payment systems."
                point4="Bike-sharing and car-sharing programs integrated with mobile apps for easy access."
              />
              <Box>
                <img src={Transport} alt="" style={{ width: "250px" }} />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <MyCard
                header="Smart Energy Management"
                point1="Implementation of renewable energy sources such as solar panels and wind turbines."
                point2="Energy-efficient street lighting with sensors to adjust brightness based on traffic and weather conditions."
                point3="Deployment of smart grids to monitor and manage energy consumption more efficiently."
                point4="Home energy management systems that allow residents to monitor and control their energy usage"
              />
              <Box>
                <img src={Energy} alt="" style={{ width: "250px" }} />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <MyCard
                header="Smart Waste Management"
                point1="IoT-enabled waste bins that monitor fill levels and optimize collection routes."
                point2="Recycling programs with incentives for residents to participate."
                point3="Composting initiatives to reduce organic waste and promote sustainability."
                point4="Smart landfill management systems to minimize environmental impact and maximize resource recovery."
              />
              <Box>
                <img src={Waste} alt="" style={{ width: "250px" }} />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <MyCard
                header="Smart Public Safety"
                point1="Surveillance cameras with video analytics for crime prevention and public safety monitoring."
                point2="Emergency response coordination systems that integrate data from various sources to improve response times."
                point3="Smart street lighting equipped with sensors and cameras to enhance security in public spaces."
                point4="Citizen safety apps that allow residents to report incidents and receive alerts in real-time."
              />
              <Box>
                <img src={Safety} alt="" style={{ width: "250px" }} />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <MyCard
                header="Smart Healthcare:"
                point1="Telemedicine services for remote consultations and medical diagnosis."
                point2="Health monitoring devices and wearables that track vital signs and provide personalized health insights."
                point3="Predictive analytics to identify potential health risks and prevent disease outbreaks."
                point4="Smart hospitals equipped with IoT devices for efficient patient care and resource management."
              />
              <Box>
                <img src={Healthcare} alt="" style={{ width: "250px" }} />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <MyCard
                header="Smart Education: "
                point1="Digital learning platforms for remote education and virtual classrooms."
                point2="Smart school buildings with energy-efficient systems and IoT-enabled infrastructure. "
                point3="Personalized learning experiences using AI-driven adaptive learning technologies."
                point4="Collaboration tools for students and teachers to facilitate communication and knowledge sharing."
              />
              <Box>
                <img src={Education} alt="" style={{ width: "250px" }} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Service;
