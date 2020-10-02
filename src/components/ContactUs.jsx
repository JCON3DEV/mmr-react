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
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";

// Social Media Icons
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

// Subscribe Toggle Button
import ToggleButton from '@material-ui/lab/ToggleButton';

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
    '& > *': {
      margin: theme.spacing(1),
    }
  }
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
          <Image src="/docs/other/contact-seal.jpg"/>
        </Box>
      </Box>

        <Box mt={3}>
          <Typography variant="body1" gutterBottom align="center">
            Got a question? We'd love to hear from you. Please complete the form or send us an
            email - we'll get back to you as soon as we can!
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
          src="https://docs.google.com/forms/d/e/1FAIpQLSchraQZiZizbq0BDFIAQaMTbiEAam87_eT57kfkuzCGcVgiqQ/viewform?embedded=true"
          width="375"
          height="1200"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </Box>

      <Box mt={8}>
        <Divider />
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom align="center">
          FOLLOW US
        </Typography>

        <Box mt={1} display="flex" justifyContent="center">
          <div className={classes.iconStyles}>
            <IconButton aria-label="instagram" color="primary" >
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="youtube" color="primary" fontSize="large">
              <YouTubeIcon />
            </IconButton>
            <IconButton aria-label="facebook" color="primary" >
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter icon" color="primary" >
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
          The Marine Mammal Rescue Centre is an Ocean Wise Initiative. Charitable registration No. 11928 2119 RR0001 (Canada) · 98-0050185 (USA).
        </Typography>
      </Box>
      <Box mt={4} mb={5}>
        <Typography variant="body2" gutterBottom align="center">
          PATIENT DIRECTORY AND SYMBOLIC ADOPTION PROGRAM OPERATED BY BC MARINE MAMMAL RESCUE SOCIETY
        </Typography>
      </Box>      
    </Container>
  );
}
