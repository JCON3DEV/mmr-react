import React from "react";
import {Icon, Image, Card} from "semantic-ui-react";
import "./aboutUs.css";
import "semantic-ui-css/semantic.min.css";
import {Link} from "react-router-dom";

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
        <Link to="/upcomingevents">
          <Button
            variant="outlined"
            color="primary"
            className="volunteerbutton"
          >
            See Calendar
          </Button>
        </Link>
      </Container>
    </div>
  );
}
