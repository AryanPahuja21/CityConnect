import {
  createTheme,
  ThemeProvider,
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[50],
    },
  },
});

function Footer() {
  return (
    <div className='mt-24'>
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          padding: "2rem 0.2rem 2rem 0.2rem",
          bgcolor: "primary.main",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography
              variant="body2"
              component="div"
              color="secondary"
              align="center"
              sx={{ textTransform: "capitalize" }}
              mb={1}
            >
              Connect and Follow us:
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="secondary"
              align="center"
              sx={{ textTransform: "capitalize" }}
              mb={2}
            >
              for the latest updates, sustainability tips, and industry news.
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "40%",
                margin: "auto",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton size="small">
                <FacebookIcon color="secondary" />
              </IconButton>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "secondary.main" }}
              />
              <IconButton size="small">
                <InstagramIcon color="secondary" />
              </IconButton>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "secondary.main" }}
              />
              <IconButton size="small">
                <LinkedInIcon color="secondary" />
              </IconButton>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "secondary.main" }}
              />
              <IconButton size="small">
                <XIcon color="secondary" />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="body2"
              component="div"
              color="secondary"
              align="center"
              sx={{ textTransform: "capitalize" }}
              mb={2}
            >
              Have questions or need assistance? Reach out to our dedicated
              support team
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "60%",
                margin: "auto",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <EmailOutlinedIcon color="secondary" />
              <Typography
                variant="body2"
                display="div"
                color="secondary"
                ml={2}
              >
                Email:{" "}
                <Link href="#" color="secondary" underline="hover">
                  support@ecotrack.com
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "60%",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <LocalPhoneOutlinedIcon color="secondary" />
              <Typography
                variant="body2"
                display="div"
                color="secondary"
                ml={2}
              >
                Phone: (123) 456-7890
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="body2"
              component="div"
              color="secondary"
              align="center"
              sx={{ textTransform: "capitalize" }}
              mb={2}
            >
              Terms of Service | Privacy Policy:
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="secondary"
              align="center"
              sx={{ textTransform: "capitalize" }}
            >
              Learn more about our commitment to privacy and
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="secondary"
              align="center"
              sx={{ textTransform: "capitalize" }}
            >
              the terms of service that govern the use of city-connect.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    </div>
  );
}

export default Footer;
