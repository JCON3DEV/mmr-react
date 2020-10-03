import React from "react";
import {Icon, Image, Card} from "semantic-ui-react";
import "./aboutUs.css";
import "semantic-ui-css/semantic.min.css";
import {Link} from "react-router-dom";
import "../maps.css";

//General Styles / Components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MissionStatement from "./MissionStatement";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Divider from "@material-ui/core/Divider";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

const src = "/images/wireframe/image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 375,
    flexGrow: 1,
  },
  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  cardText: {
    marginLeft: "0.5em",
    marginRight: "0.5em",
    marginTop: "0.5em",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <div>
      {/* <Container className="missionstatement">
        <MissionStatement />
      </Container> */}
      <Container maxWidth="sm">
        <Box mt={10} justifyContent="center">
          <iframe
            title="eventmaps"
            src="https://www.google.com/maps/d/embed?mid=1s6Akq9JTZOS_VQ7rSzzpwbdkZjZ6MXhf&hl=en"
            width="640"
            height="580"
          ></iframe>
        </Box>
        <Box mt={3} ml={13}>
          <Link to="/upcomingevents">
            <Button
              display="flex"
              justifycontent="center"
              variant="outlined"
              color="primary"
              className="seecalendarbutton"
            >
              See Calendar
            </Button>
          </Link>
        </Box>

        <Box mt={10}>
          <Divider />
        </Box>

        <Box mt={5}>
          <Typography variant="h5" gutterBottom align="center">
            FOLLOW US
          </Typography>

          <Box mt={1} display="flex" justifyContent="center">
            <div className={classes.iconStyles}>
              <a
                href="https://www.instagram.com/marinemammalrescue/?hl=en"
                target="_self"
              >
                <IconButton aria-label="instagram" color="primary">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7BIY40WypVskXod63fu-Tw"
                target="_self"
              >
                <IconButton
                  aria-label="youtube"
                  color="primary"
                  fontSize="large"
                >
                  <YouTubeIcon />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/vammrc/" target="_self">
                <IconButton aria-label="facebook" color="primary">
                  <FacebookIcon />
                </IconButton>
              </a>
              <a href="https://twitter.com/marmamrescue?lang=en" target="_self">
                <IconButton aria-label="twitter icon" color="primary">
                  <TwitterIcon />
                </IconButton>
              </a>
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
            PATIENT DIRECTORY AND SYMBOLIC ADOPTION PROGRAM OPERATED BY BC
            MARINE MAMMAL RESCUE SOCIETY
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
