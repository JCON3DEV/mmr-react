import React from "react";

// General Styles / Components
import {
  Container,
  Box,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Footer from "./Footer";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

//Semantic UI Components
import {Image} from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
}));

export default function ContactUs(props) {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Box mt={10}>
          <Typography variant="h3" gutterBottom align="center">
            Contact Us
          </Typography>
        </Box>
        <Box mt={5}>
          <Image src="/docs/other/contact-seal.jpg" />
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="body1" gutterBottom align="center">
          Got a question? We'd love to hear from you. Please complete the form
          or send us an email - we'll get back to you as soon as we can!
        </Typography>
      </Box>
      <Box mt={2}>
        <Divider />
      </Box>

      <Box mt={3}>
        <Typography variant="h5" gutterBottom align="center">
          <b>Find a marine mammal in distress?</b>
        </Typography>
      </Box>
      <Box mt={1}>
        <Typography variant="h5" gutterBottom align="center">
          Call 604-258-7325
        </Typography>
      </Box>
      <Box mt={2}>
        <Divider />
      </Box>

      <div className={classes.root}>
        <Box mt={3}>
          <Typography variant="h6" gutterBottom align="center">
            Get in touch with us
          </Typography>
        </Box>

        <Box mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom align="center">
                <b>MEDIA INQUIRIES</b>
              </Typography>
              <Typography variant="body2" gutterBottom align="center">
                publicrelations@ocean.org
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom align="center">
                <b>GENERAL INQUIRIES</b>
              </Typography>
              <Typography variant="body2" gutterBottom align="center">
                rescue@ocean.org
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mt={3}>
          <Typography variant="body1" gutterBottom align="center">
            <b>PHONE</b>
          </Typography>
          <Typography variant="body2" gutterBottom align="center">
            604-258-SEAL (7325)
          </Typography>
        </Box>
      </div>

      {/* <div class="ui mini form">
        <div class="two fields">
          <div class="field">
            <label>First Name *</label>
            <input placeholder="First Name" type="text"></input>
          </div>
          <div class="field">
            <label>Last Name *</label>
            <input placeholder="Last Name" type="text"></input>
          </div>
          <div class="field">
            <label>Subject *</label>
            <input placeholder="Subject" type="text"></input>
          </div>
          <div class="field">
            <label>E-mail *</label>
            <input placeholder="E-mail" type="text"></input>
          </div>
          <div class="field" width="50">
            <label>Message</label>

            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div class="ui submit button">Submit</div>
      </div> */}

      <Box mt={3}>
        <iframe
          title="contactUsForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSchraQZiZizbq0BDFIAQaMTbiEAam87_eT57kfkuzCGcVgiqQ/viewform?embedded=true"
          width="375"
          height="90vh"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </Box>

      {/* <Box mt={8}>
        <Divider />
      </Box> */}

      <Footer />
    </Container>
  );
}
