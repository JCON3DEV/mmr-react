import React from 'react'

// Navigation / Routes
import { Link } from "react-router-dom";
import MyMammalEvents from "./MyMammalEvents";


//General Styles/Components
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "../donate.css"


//Controls components based on maxWidth 
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 375,
    display: "flex",
    flexGrow: 1,
  },

  //uses flex to move menu icon to right side
  toggleStyles: {
    flex: 1,
  },
});

export default function MammalEvents(props) {
  const classes = useStyles();

  // MATERIAL - toggle button states
  const [alignment, setAlignment] = React.useState('left');
  const [donateTo, setDonateTo] = React.useState('myself');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleDonateTo = (event, newDonateTo) => {
    setDonateTo(newDonateTo);
  };


  const [dense, setDense] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        ---
      </Typography>

      <Box mt={6}>
        <Divider />
        <Box mt={6}>
          <Typography variant="h4" gutterBottom align="center">
            My Mammal's Upcoming Virtual Events
          </Typography>

          <Typography variant="h5" gutterBottom align="center">
            The health of our staff, volunteers and guests is a top priority for
            us at Marine Mammal Rescue. Due to concerns regarding COVID-19, the
            Organisation has decided to supoort online attendance for upcoming
            events.
          </Typography>
        </Box>
        <Box mt={6}>
          <Divider />
        </Box>
      </Box>

      <Box mt={3} display="flex" justifyContent="center">
        <Link className="link" to="/mammalevents">
          <Button variant="contained" color="secondary" size="large">
            Attend Placeholder Event
          </Button>
        </Link>
      </Box>

      <Box>{MyMammalEvents}</Box>
    </Container>
  );
}