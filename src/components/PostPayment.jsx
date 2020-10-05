import React from "react";

// Navigation and routes
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Divider from "@material-ui/core/Divider";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

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

export default function PaymentConfirm(props) {
  const classes = useStyles();
  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={18}>
        <Typography variant="h3" gutterBottom align="center">
          Thank you for sponsoring Boris!
        </Typography>
        <Box mt={3}>
          <Image src="/docs/other/sponsored-seal.png" size="small" centered />
        </Box>
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom align="center">
          With your donation to the rescue centre, you've helped us care for
          Boris and the more than 100 marine mammals we rescue, rehabilitate,
          and release every year.
        </Typography>
      </Box>

      <Box mt={5} display="flex" justifyContent="center">
        <Link className="link" to="/myseals">
          <Button variant="contained" color="primary" size="large">
            See Your Seals
          </Button>
        </Link>
      </Box>
      <Box mt={1} mb={14} display="flex" justifyContent="center">
        {/* <Link className="link" to="/myseals"> */}
        <a href="https://tracking.ocean.org/patients/" target="_self">
          <Button variant="contained" color="primary" size="large">
            See our Tracker Map
          </Button>
        </a>
        {/* </Link> */}
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
            <IconButton aria-label="instagram" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="youtube" color="primary" fontSize="large">
              <YouTubeIcon />
            </IconButton>
            <IconButton aria-label="facebook" color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter icon" color="primary">
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
