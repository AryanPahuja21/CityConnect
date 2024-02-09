import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[700],
    },
  },
});

function CardLayout({ header, point1, point2, point3, point4 }) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width: "70%", boxShadow: "none" }}>
        <CardContent>
          <Typography variant="h5" component="h5">
            {header}
          </Typography>
          <Typography variant="body1" component="div" color="secondary">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            endIcon={<ArrowForwardIosIcon />}
          >
            More
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default CardLayout;
