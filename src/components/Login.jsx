import React from "react";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Text Field Component
import TextField from '@material-ui/core/TextField';

// Social Media Icons
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from "@material-ui/core/Divider";

// Subscribe Toggle Button
import ToggleButton from '@material-ui/lab/ToggleButton';

//Semantic UI Components
import { Image } from 'semantic-ui-react';

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },

  fieldStyles: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90ch',
    },
  },

  iconStyles: {
    '& > *': {
      margin: theme.spacing(1),
    }
  }
}));

export default function Login(props) {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Login
        </Typography>

        <Box mt={8}>
          <Image src="/docs/other/login-seal.png" size="small" centered />
        </Box>
      </Box>

      <Box mt={5}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Email"
            defaultValue="lighthouse@gmail.com"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5} mb={15} display="flex" justifyContent="center">
        <Button variant="contained" color="secondary" size="large">
          <Link className="link" to="/mammalprofile-postlogin">
            Login
          </Link>
        </Button>
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