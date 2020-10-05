import React from "react";
import {Icon, Image, Card} from "semantic-ui-react";
import "./aboutUs.css";
import "semantic-ui-css/semantic.min.css";
import {Link} from "react-router-dom";
import "../maps.css";
import Footer from "./Footer";

//General Styles / Components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MissionStatement from "./MissionStatement";

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

        <Footer />
      </Container>
    </div>
  );
}
