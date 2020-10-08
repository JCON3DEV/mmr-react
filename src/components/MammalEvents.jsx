import React, {useEffect, useState} from "react";

// Navigation / Routes
import {Link, useParams} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "../donate.css";
import Axios from "axios";

// Event Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {LabelGroup} from "semantic-ui-react";

//Dialog Pop-up Elements
import {useSpring, animated} from "react-spring/web.cjs";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import Footer from "./Footer";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {in: open, children, onEnter, onExited, ...other} = props;
  const style = useSpring({
    from: {opacity: 0},
    to: {opacity: open ? 1 : 0},
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

//Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
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
  //Dialog pop-up functions
  const [open, setOpen] = React.useState(false);

  const [selectedEvent, setSelectedEvent] = React.useState({
    id: 1,
    short_description: "test",
    link: "www.google.com",
  });
  const url = selectedEvent.link;
  const handleOpen = (item) => () => {
    console.log(item);
    setSelectedEvent(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  // const [sponsor, setSponsor] = useState([]);
  const MagooId = localStorage.getItem("userId");

  useEffect(() => {
    Axios.get(`/api/events/${MagooId}`)
      .then((result) => {
        console.log(
          "This should be a list of 7 personalised events %%%%%",
          result.data.events
        );
        setSponsorEvents(result.data.events);
      })
      .catch((err) => {
        console.log("Personalised event search failed", err);
      });
  }, []);
  // -----------------------------------------------
  // map throught the sponsorEvents in the return below
  // console.log("This is sponsorEvents; ", sponsorEvents[0]);
  let loggedInSponsor = sponsorEvents[0];
  // console.log("This is loggedInSponsor;", loggedInSponsor);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        ---
      </Typography>

      <Box mt={10}>
        <Box mt={6}>
          {/* Below is a conditinonal operator for render of logged in sponsor */}
          {loggedInSponsor ? (
            <Typography variant="h4" gutterBottom align="center">
              {loggedInSponsor.sponsor_name}'s Events
            </Typography>
          ) : (
            <Typography variant="h4" gutterBottom align="center">
              Individual User Events
            </Typography>
          )}

          <Box mt={4}>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              color="primary"
            >
              <strong>COVID-19 Update</strong>
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1" gutterBottom align="center">
              The health of our staff, volunteers and guests is a top priority
              for us at MMR. Due to concerns regarding COVID-19, we have decided
              to supoort online attendance for upcoming events.
            </Typography>
          </Box>
        </Box>
        <Box mt={6}>
          <Divider />
        </Box>
      </Box>

      {/* ------------------------------------------------ */}
      <Box mt={3} mb={8}>
        {sponsorEvents.map((item) => (
          <>
            <Box mt={4}>
              <Card>
                <CardActionArea>
                  <CardContent key={item.id}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.short_description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.location}
                      {<br />}
                      {item.long_description}
                      {<br />}
                      {item.date_time}
                      {/* commented out below.- DO not beleive the url is necessary */}
                      {/* {<br />}
                      {item.link} */}
                    </Typography>
                    <Box mt={2}>
                      <Link
                        to={{
                          pathname: "/liveevent",
                          state: {url: item.link},
                        }}
                      >
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                        >
                          Attend
                        </Button>
                      </Link>
                    </Box>
                    <CardActions>
                      {/* Below needs the link address fixed with MagooId */}
                      <Link className="link" to={``}>
                        {/* <Button size="small" color="primary">
                          Attend
                        </Button> */}
                        {/* <Button
                          onClick={props.onOpen(item)}
                          onClose={props.onClose}
                          variant="contained"
                          color="primary"
                          size="large"
                        >
                          RSVP
                        </Button> */}
                      </Link>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </>
        ))}
      </Box>
      {/* -------------------------------------------------- */}
      {/* <Box>{sponsorEvents}</Box> */}

      {/* below is actually ALL mamal events */}
      <Footer />
    </Container>
  );
}
