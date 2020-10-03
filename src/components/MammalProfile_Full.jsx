import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import MyMammalEvents from "./MyMammalEvents";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
import {useSpring, animated} from "react-spring/web.cjs";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
import "../mammalprofilefull.css";

// Social Media Icons
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
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
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Full Mammal Profile
        </Typography>
        <Box>{mammal.mammal_name}</Box>
      </Box>

      <Box mt={8}>
        <Divider />
      </Box>
      {/* ------------------------------ */}
      <Container maxWidth="sm">
        <Box mt={9}>{mammal.profile_pic}</Box>

        <Box mt={3}>
          <Typography variant="h4" gutterBottom align="center">
            BORIS (hardcoded)
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            date admitted: 2020/07/03
          </Typography>
          <Divider />
        </Box>

        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            story
          </Typography>
          <Typography variant="body1" gutterBottom>
            Boris is an orphaned male seal pup; rescued near Kyuquot after being
            discovered by a member of the public. Believed to be just 10 days
            old, he weighed just 1.76 kg when he was admitted.
          </Typography>
        </Box>

        <Box mt={5} mb={5} display="flex" justifyContent="center">
          <Link className="link" to="/donate">
            <Button variant="contained" color="primary" size="large">
              Sponsor Me
            </Button>
          </Link>
        </Box>

        <Box mt={3} mb={3}>
          <Typography variant="h4" gutterBottom>
            gallery (Coming soon)
          </Typography>
          {/* <Image src="/docs/other/profile-fade.png"/> */}
        </Box>

        <Box mt={8}>
          <Divider />
        </Box>
      </Container>

      {/* ----------------------------- */}
      <Box mt={5}>
        <Typography variant="h4" gutterBottom align="center">
          Our Upcoming Virtual Events
        </Typography>
        <Box>
          <MyMammalEvents onOpen={handleOpen} onClose={handleClose} />
        </Box>
        <Box mt={5} mb={5} display="flex" justifyContent="center">
          {/* <Button
            onClick={handleOpen}
            onClose={handleClose}
            variant="contained"
            color="secondary"
            size="large"
          >
            Attending
          </Button> */}
        </Box>
      </Box>

      {/* this is just a place holder, can be deleted later */}
      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/loginerror">
          <Button variant="contained" color="primary" size="large">
            Sponsor Me
          </Button>
        </Link>
      </Box>

      <div>
        <Dialog
          // onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {selectedEvent.short_description} is happening now!!
          </DialogTitle>

          <Link
            to={{
              pathname: "/liveevent",
              state: {url: selectedEvent.link},
            }}
          >
            {/* <a href={selectedEvent.link}> */}
            <Button
              // style={{backgroundColor: "green"}}
              variant="contained"
              color="secondary"
              size="large"
            >
              Join Event
            </Button>
            {/* </a> */}
          </Link>
        </Dialog>
      </div>

      {/* this has to be dynamically updated from db */}
      <iframe
        title="sealvideo"
        className="mammalprofilefull"
        width="375"
        src="https://www.youtube.com/embed/qMKEm2r1HqI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowfullScreen
      ></iframe>

      <Box mt={8}>
        <Divider />
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom align="center">
          FOLLOW US
        </Typography>

        <Box mt={1} display="flex" justifyContent="center">
          <div className={classes.iconStyles}>
            <IconButton aria-label="instagram" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="youtube" color="primary" fontSize="large">
              <YouTubeIcon />
            </IconButton>
            <IconButton aria-label="facebook" color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter icon" color="primary">
              <TwitterIcon />
            </IconButton>
          </div>
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" gutterBottom align="center">
          STAY INFORMED
        </Typography>

        <Box mt={1} display="flex" justifyContent="center">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            Subscribe for updates
          </ToggleButton>
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="body1" gutterBottom align="center">
          The Marine Mammal Rescue Centre is an Ocean Wise Initiative.
          Charitable registration No. 11928 2119 RR0001 (Canada) · 98-0050185
          (USA).
        </Typography>
      </Box>
      <Box mt={4} mb={5}>
        <Typography variant="body2" gutterBottom align="center">
          PATIENT DIRECTORY AND SYMBOLIC ADOPTION PROGRAM OPERATED BY BC MARINE
          MAMMAL RESCUE SOCIETY
        </Typography>
      </Box>
    </Container>
  );
}
