import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import MyMammalEvents from "./MyMammalEvents";
import Carousel from "./Carousel.jsx";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useSpring, animated} from "react-spring/web.cjs";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../mammalprofilefull.css";
import Footer from "./Footer";
import DateFormat from "./DateFormat.jsx";

import Divider from "@material-ui/core/Divider";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";
import Axios from "axios";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    maxWidth: 375,
  },
  map: {
    maxWidth: "100%",
  },

  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

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
const formatDate = (dateString) => {
  if (typeof dateString !== "undefined") {
    return new Date(dateString.replace(" ", "T")).toString();
  } else {
    return "";
  }
};
export default function MammalProfile_Full(props) {
  const classes = useStyles();

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
  // useParams takes the info from the url address bar
  const [mammal, setMammal] = useState({});
  // setting useParams allows us to interpolate the axios request
  const params = useParams();
  useEffect(() => {
    Axios.get(`/api/mammals/${params.id}`)
      .then((result) => {
        console.log("******* result.data.mammals", result.data.mammals[0]);
        setMammal(result.data.mammals[0]);
      })
      .catch((err) => {
        console.log("Mammal id not found!", err);
      });
  }, []);

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={9}>
        {
          <img
            src={process.env.PUBLIC_URL + mammal.profile_pic}
            alt="cute seal"
            // ##### Temporary styling fix ####################
            // width="310px"
          />
        }
      </Box>

      <Box mt={3}>
        <Typography variant="h4" gutterBottom align="center">
          {mammal.mammal_name}
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          {/* moment().format('MMMM Do YYYY, h:mm:ss a') */}
          {/* {moment(dateToBeFormate).format('DD/MM/YYYY')} */}
          date admitted: {formatDate(mammal.date_admitted)}
          {/* date admitted: {mammal.date_admitted} */}
        </Typography>
        <Divider />
      </Box>

      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          story
        </Typography>
        <Typography variant="body1" gutterBottom>
          {mammal.bio}
          {<br />}
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link
          className="link"
          to={{pathname: `/donate/${mammal.id}`, state: {mammal}}}
        >
          <Button variant="contained" color="primary" size="large">
            Sponsor Me
          </Button>
        </Link>
      </Box>

      <Box mt={4}>
        <Divider />
      </Box>

      <Box mt={2} mb={10}>
        <Typography variant="h4" gutterBottom>
          <Carousel />
        </Typography>
      </Box>

      {/* ----------------------------- */}
      <Box mt={3}>
        <Typography variant="h5" gutterBottom align="center">
          FEATURED EVENTS
        </Typography>

        <Box>
          <MyMammalEvents onOpen={handleOpen} onClose={handleClose} />
        </Box>

        <Box mt={2} mb={2} display="flex" justifyContent="center"></Box>
      </Box>

      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <Typography variant="h5" gutterBottom align="center">
              {selectedEvent.short_description} is happening now!!
            </Typography>
          </DialogTitle>

          <Link
            to={{
              pathname: "/liveevent",
              state: {url: selectedEvent.link},
            }}
          >
            <Box mb={4} display="flex" justifyContent="center">
              {/* <a href={selectedEvent.link}> */}
              <Button
                // style={{backgroundColor: "green"}}
                variant="contained"
                color="primary"
                size="large"
              >
                Join Event
              </Button>
              {/* </a> */}
            </Box>
          </Link>
        </Dialog>
      </div>

      <Box mt={3}>
        <Box mt={1}>
          <Typography variant="h5" gutterBottom align="center">
            PAST VIDEOS
          </Typography>
        </Box>

        <Box mt={3}>
          {/* add a conditional render here mammals.history_link*/}
          {/* this has to be dynamically updated from db for unique videos based on mammal id*/}
          {/* https://www.youtube.com/embed/qMKEm2r1HqI - seal pup link orriginal */}
          <iframe
            title="sealvideo"
            className="mammalprofilefull"
            width="375"
            src={mammal.historic_link}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullScreen
          ></iframe>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}
