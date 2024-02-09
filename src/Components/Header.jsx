import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: blue["500"],
    },
    error: {
      main: grey[900],
    },
  },
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          {/* <img
            src={Logo}
            alt="carbon footprint"
            style={{ width: "40px", marginRight: "10px" }}
          /> */}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            CityConnect
          </Typography>
          <Stack direction="row" gap={4} sx={{ marginRight: "30px" }}>
            <Link color="secondary" underline="hover" variant="body1">
              Home
            </Link>
            <Link color="secondary" underline="hover" variant="body1">
              Services
            </Link>
            <Link color="secondary" underline="hover" variant="body1">
              Blog
            </Link>
          </Stack>
          <Link href="/login">
            <Button variant="contained" color="error" size="medium">
              Log In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
