import React, { useEffect, useState } from 'react'

// Navigation / Routes
import { Link } from "react-router-dom";


//General Styles/Components
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "../donate.css"
import Axios from 'axios';

// Evemt Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


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
  const [alignment, setAlignment] = React.useState("left");
  const [donateTo, setDonateTo] = React.useState("myself");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleDonateTo = (event, newDonateTo) => {
    setDonateTo(newDonateTo);
  };

  const [dense, setDense] = React.useState(false);

  // i need to create state to remember the response
  // i need this component to make an axios request with the sponsor id
  // use local storage
  // THis will request to api/events/:id/events
  const [sponsorEvents, setSponsorEvents] = useState([]);

  useEffect(() => {
    const MagooId = localStorage.getItem("userId");

    Axios.get(`/api/events/${MagooId}`)
      .then((result) => {
        // console.log(
        //   "This should be a list of 7 personalised events %%%%%",
        //   result.data.events
        // );
        setSponsorEvents(result.data.events);
      })
      .catch((err) => {
        console.log("Personalised event search failed", err);
      });
  }, []);
  // -----------------------------------------------
  // map throught the sponsorEvents in the return below

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        ---
      </Typography>

      <Box mt={6}>
        <Divider />
        <Box mt={6}>
          <Typography variant="h4" gutterBottom align="center">
            Individual users Upcoming Virtual Events
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
        <Link className="link" to={``}>
          <Button variant="contained" color="secondary" size="large">
            Attend Placeholder Event
          </Button>
        </Link>
      </Box>
      {/* ------------------------------------------------ */}
      <Card>
        {sponsorEvents.map((item) => (
          <>
            <CardActionArea>
              <CardContent key={item.id}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.short_description}
                  {/* Ice Cream Hunt */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.location}
                  {<br />}
                  Its gonna be awesome
                  {<br />}
                  {item.link}
                </Typography>
                <CardActions>
                  {/* Below needs the link address fixed with MagooId */}
                  <Link className="link" to={``}>
                    <Button size="small" color="primary">
                      Attend
                    </Button>
                  </Link>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </>
        ))}
      </Card>
      {/* -------------------------------------------------- */}
      {/* <Box>{sponsorEvents}</Box> */}

      {/* below is actually ALL mamal events */}
    </Container>
  );
}