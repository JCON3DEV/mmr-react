import React from "react";
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

//Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Divider from "@material-ui/core/Divider";

//Text Field Component
import TextField from "@material-ui/core/TextField";

//Semantic UI Components
import {Image} from "semantic-ui-react";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },

  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function MyProfile() {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={15}>
        <Typography variant="h4" gutterBottom align="center">
          Account Settings
        </Typography>
        <Box mt={3}>
          <Image src="/docs/other/sponsor-pic.png" size="small" centered />
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" gutterBottom align="center">
          <strong>Brian Chang</strong>
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" gutterBottom align="center">
          <em>Marine Mammal Sponsor</em>
        </Typography>
      </Box>

      <Box mt={3}>
        <Divider />
      </Box>

      <Box mt={3}>
        <Typography variant="body1" gutterBottom align="center">
          Update your account information by editing your saved profile information in the text fields below.
        </Typography>
      </Box>

      <Box mt={5}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="Full Name"
            defaultValue="Brian Chang"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="Email"
            defaultValue="mr-meeseeks@lighthouselabs.ca"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="Address"
            defaultValue="185 Berry Street, Suite 550"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="City"
            defaultValue="Vancouver"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="Province"
            defaultValue="BC"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="Postal Code"
            defaultValue="V2J 2S9"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-disabled"
            label="Country"
            defaultValue="Canada"
            variant="outlined"
          />
        </form>
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
              <IconButton aria-label="youtube" color="primary" fontSize="large">
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

        <Box mt={2} fullWidth display="flex" justifyContent="center">
          <Typography variant="body2" gutterBottom align="center">
            <em>Sign up for our weekly newsletter</em>
          </Typography>
        </Box>
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="standard-required"
            label="Email"
            variant="outlined"
            id="standard-size-normal"
          />
        </form>
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="contained" size="normal" color="primary">
          Submit
        </Button>
      </Box>

      <Box mt={4}>
        <Divider />
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
