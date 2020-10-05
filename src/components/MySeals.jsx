import React from "react";

// Navigation and routes
import {Link} from "react-router-dom";
import myMammals from "./myMammals";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Footer from "./Footer";

// Material UI Text Field Component
import TextField from "@material-ui/core/TextField";

// Seal Card Elements
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "../mySeals.css";

//Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 375,
  },
  map: {
    maxWidth: "100%",
  },
});
// below is storing local storage as a variable to fake login
const MagooId = localStorage.getItem("userId");

export default function MySeals(props) {
  const classes = useStyles();

  return (
    <Container>
      <Box mt={12} className={classes.root}>
        <Typography variant="h4" gutterBottom align="center">
          My Sponsored Seals
        </Typography>
      </Box>

      <Box mt={4} className={classes.root}>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          Welcome back, Brian!
        </Typography>
      </Box>

      <Box mt={1} className={classes.root}>
        <Typography variant="body1" gutterBottom align="center">
          Stay up-to-date with the seals you've sponsored! View live cam
          footage, upcoming events featuring your seal, photo galleries, and
          more.
        </Typography>
      </Box>

      <Box mt={4}>
        <Divider />
      </Box>

      {/* This dynamically rendered using a hard coded sponsor id */}
      <Box>{myMammals}</Box>

      <Box mt={4}>
        <Divider />
      </Box>

      <Box mt={6} className={classes.root}>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          <strong>See our latest admissions</strong>
        </Typography>
      </Box>

      <Box mt={3} className={classes.root}>
        <Typography variant="body1" gutterBottom align="center">
          New patients are always being added to the list of adoptable patients
          at MMR. Browse our patient directory to discover more marine mammals
          in need.
        </Typography>
      </Box>

      <Box mt={3} display="flex" justifyContent="center">
        <Link className="link" to="/mammals">
          <Button variant="outlined" color="primary" size="large">
            See All Patients
          </Button>
        </Link>
      </Box>

      <Box mt={4}>
        <Divider />
      </Box>

      <Box mt={6} className={classes.root}>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          <strong>Join us for Virtual Events</strong>
        </Typography>
      </Box>

      <Box mt={3} className={classes.root}>
        <Typography variant="body1" gutterBottom align="center">
          Check out upcoming virtual events that feature your sponsored seals
          alongside MMR staff, marine biologists, and veterinarians.
        </Typography>
      </Box>

      <Box mt={2} mb={5} display="flex" justifyContent="center">
        <Link className="link" to={`/mammalevents/${MagooId}`}>
          <Button variant="contained" color="primary" size="large">
            My Upcoming Events
          </Button>
        </Link>
      </Box>
      <Footer />
    </Container>
  );
}
