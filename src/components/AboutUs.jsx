import React from "react";
import {Icon, Image, Card} from "semantic-ui-react";
import "./aboutUs.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "./Footer";
// import scrollToTop from "./scrollToTop.jsx";

//General Styles / Components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MissionStatement from "./MissionStatement";

import Divider from "@material-ui/core/Divider";

// Material UI Text Field Component
import TextField from "@material-ui/core/TextField";

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
      <Container maxWidth="sm">
        <Box mt={10}>
          <Typography variant="h3" gutterBottom align="center">
            About Us
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom align="center">
            We give marine mammals a second chance at life
          </Typography>
          <Box mt={5}>
            <Image src="/docs/other/aboutus.jpg" />
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" gutterBottom align="center">
            <em>
              The Marine Mammal Rescue Centre is a hospital for sick, injured or
              orphaned marine mammals.
            </em>
          </Typography>
        </Box>
        <Box mt={4}>
          <Divider />
        </Box>

        <Box mt={4}>
          <Box mb={4}>
            <Typography variant="h4" gutterBottom align="center">
              Meet The Team
            </Typography>
          </Box>
          <div className="ui six doubling cards">
            <div className="card">
              <div className="image">
                <img
                  width="300"
                  src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg?format=300w"
                  alt="text"
                />
                <p className={classes.cardText}>
                  <strong>Staff Veterinarian</strong>
                  <br />
                  Dr. Martin Haulena, DVM, MSc.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300246548-A4W55NOGVNP7X6AJ5ZRL/ke17ZwdGBToddI8pDm48kDlgluwBU5haXwZmVg2eF2lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyRbbOmNInTZdmBP-n33laVAFFtBU_RxiJbFZNwBvN3s4kkZImk3JNGP0jmHlAyZl8/IMG_7477.jpg?format=500w"
                  alt="text"
                />
                <p className={classes.cardText}>
                  <strong>Rescue Center Manager</strong>
                  <br />
                  Lindsaye Akhurst
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1511898636803-EXE2RG28AFV7DU7RNGUV/ke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ/Emily.JPG?format=300w"
                  alt="text"
                />
                <p className={classes.cardText}>
                  <strong>Rescue Center Manager</strong>
                  <br />
                  Emily Johnson
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1511898691946-D8HHVWYWPIJ5S4JSU830/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Shanie-Fradette.jpg?format=300w"
                  alt="text"
                />
                <p className={classes.cardText}>
                  <strong>Senior Veterinary Technician</strong>
                  <br />
                  Shanie Fradette
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1511898707730-H5M3UG3L3EQYNKQTKWX1/ke17ZwdGBToddI8pDm48kLbrb96cIPqpYH68Wnf5KvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI5g_jQmUeD4Pq3JVUCYSRtKhvNLm1vuwcZnVq9pUkOQkKMshLAGzx4R3EDFOm1kBS/Amelia+MacRae.jpg?format=300w"
                  alt="text"
                />
                <p className={classes.cardText}>
                  <strong>Rehabilitation Specialist Adviser</strong>
                  <br />
                  Amelia MacRae, PhD
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1565291167224-0KB0MS157IBK3NVGG2IO/ke17ZwdGBToddI8pDm48kK1raw0iF6NsobpPQibsBrJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URHhj5un_tIUO8fgu8ytGGmzbnzwOPxu5D4cXfMiGyjnhajF091QNjmz72M4wbDDNA/Hannah2.jpg?format=300w"
                  alt="text"
                />
                <p className={classes.cardText}>
                  <strong>Veterinarian</strong>
                  <br />
                  Dr. Hannah Drumm, DVM
                </p>
              </div>
            </div>
          </div>
          <Box mt={5} display="flex" justifyContent="center">
            <a href="https://rescue.ocean.org/volunteer" target="_self">
              <Button
                variant="outlined"
                color="primary"
                className="volunteerbutton"
              >
                Volunteer With us
              </Button>
            </a>
          </Box>
        </Box>

        <Footer />
      </Container>
      {/* still working on this - serah  */}
      {/* <button onclick="topFunction()" id="myBtn" title="Go to top"> */}
      <scrollToTop />

      {/* </button> */}
    </div>
  );
}
