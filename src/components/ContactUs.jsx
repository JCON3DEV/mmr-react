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
import {makeStyles} from "@material-ui/core/styles";

// Social Media Icons
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from "@material-ui/core/Divider";

// Subscribe Toggle Button
import ToggleButton from '@material-ui/lab/ToggleButton';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 375,
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
      <Box mt={10}>
        <Typography>
          <h4>CONTACT US!</h4>
        </Typography>
        <p>
          We'd love to hear from you. Please complete the form or send us an
          email - we'll get back to you as soon as we can!
        </p>
        <h5> PHONE</h5>
        <p>604-659-3752</p>
        <h5> E-mail</h5>
        <p>
          <em>publicrelations@ocean.org</em>
        </p>
      </Box>
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
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSchraQZiZizbq0BDFIAQaMTbiEAam87_eT57kfkuzCGcVgiqQ/viewform?embedded=true"
        width="640"
        height="939"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
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
