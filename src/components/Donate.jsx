import React, { useState } from "react";

// Navigation / Routes
import {Link, useLocation} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "../donate.css";

// Material UI ToggleButton Components
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

// Material UI List Component
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FormControl from "@material-ui/core/FormControl";

// Material UI Text Field Component
import TextField from "@material-ui/core/TextField";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

//Semantic UI Components
import {Image} from "semantic-ui-react";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
    display: "flex",
    flexGrow: 1,
  },

  //uses flex to move menu icon to right side
  toggleStyles: {
    flex: 1,
  },

  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Donate(props) {
  const location = useLocation();
  console.log("===========> location.state.mammal",location.state.mammal);  
  // Props for mammal
  // const [mammal, setMammal] = useState();
  // setMammal(location.state.mammal);
  const mammal = location.state.mammal;
  console.log("mammal obj;", mammal);
  
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  // MATERIAL - toggle button states
  const [alignment, setAlignment] = React.useState("left");
  const [donateTo, setDonateTo] = React.useState("myself");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleDonateTo = (event, newDonateTo) => {
    setDonateTo(newDonateTo);
  };

  const [dense, setDense] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        ---
      </Typography>

      <Box mt={8}>
        <Typography variant="h3" gutterBottom align="center">
          Save Our Seals
        </Typography>

        <Typography variant="h5" gutterBottom align="center">
          ADOPT {mammal.mammal_name}
        </Typography>
      </Box>

      <Box mt={4}>
        <Image src="/docs/other/sealvector.png" size="medium" centered />
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="donation amount"
          size="large"
        >
          <ToggleButton value="left" aria-label="left aligned">
            $10
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            $50
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            $100
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            Custom
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box mt={6}>
        <Divider />
        <Box mt={6}>
          <Typography variant="h4" gutterBottom align="center">
            How your donation saves lives
          </Typography>

          <Typography variant="h5" gutterBottom align="center">
            Every year, we rescue, rehabilitate and release more than 100
            harbour seal pups. Your symbolic adoption is a tax-deductible
            donation that enables us to continue to save these lives.
          </Typography>
        </Box>
        <Box mt={6}>
          <Divider />
        </Box>
      </Box>

      <Box mt={6} display="flex" justifyContent="center">
        <Box mt={3}>
          <Typography variant="h5" gutterBottom align="center">
            This donation is...
          </Typography>
          <Box mt={3}>
            <ToggleButtonGroup
              value={donateTo}
              exclusive
              onChange={handleDonateTo}
              aria-label="donation classification"
              size="large"
            >
              <ToggleButton value="myself" aria-label="myself">
                For Myself
              </ToggleButton>
              <ToggleButton value="gift" aria-label="gift">
                A Gift
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Box>

      <Box mt={8}>
        <Divider />
        <Box mt={4}>
          <Typography variant="h5" gutterBottom align="center">
            WITH YOUR ADOPTION,
          </Typography>
          <Typography variant="h5" gutterBottom align="center">
            YOU GET...
          </Typography>
        </Box>
      </Box>

      <Grid item s={12} mt={6}>
        <div className={classes.demo}>
          <List dense={dense}>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <ListItemText primary="A custom social media badge to share your adoption with the world" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <ListItemText primary="A customized, printable certificate confirming your seal adoption" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <ListItemText primary="Access to your seal’s live stream, exclusive videos,  patient updates, and online events that feature your seal" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <ListItemText primary="A tax receipt in the amount of your donation" />
            </ListItem>
          </List>
        </div>
      </Grid>

      <Box mt={8}>
        <Divider />
        <Box mt={4}>
          <Typography variant="h4" gutterBottom align="center">
            Adoption Certificate
          </Typography>

          <Typography variant="body1" gutterBottom align="center">
            This is the name honoured on the certificate. It can be any full
            name, or even a nickname.
          </Typography>

          <Box mt={5} width="100%">
            {/* <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            > */}
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                fullWidth
                // required
                id="standard-required"
                label="Name on certificate"
                // defaultValue="Eg. Andy Lindsay"
                id="standard-size-normal"
              />
            </form>
            {/* </FormControl> */}
          </Box>
        </Box>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        {/* updating */}
        <Link className="link" to="/paymentconfirm">
          <Button variant="contained" color="primary" size="large">
            Sponsor Now
          </Button>
        </Link>
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
