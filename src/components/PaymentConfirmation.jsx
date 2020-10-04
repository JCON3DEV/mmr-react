import React, { useEffect, useState } from "react";
import Axios from "axios";

// Navigation and routes
import {Link, useParams, useLocation} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../paymentConfirmation.css";

//Text Field Component
import TextField from "@material-ui/core/TextField";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Divider from "@material-ui/core/Divider";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },

  fieldStyles: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90ch",
    },
  },

  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
// const params = useParams();

export default function PaymentConfirm(props) {
  const location = useLocation();
  console.log("location.state", location.state);
  let mammal = {};
   const placeHolder = {
     id: 100,
     mammal_name: "Our Seals",
     age: 4,
     weight: 6.2,
     bio:
       "All of our seals need regular treatments and support. Your contribution has helped us Save Our Seals. Thank you",
     date_admitted: "2020-12-25",
     date_released: null,
     profile_pic: "/docs/other/sealvector.png", //"docs/seals/alfonso.jpg",
     event_id: 12,
     admin_id: 1,
     sponsored: true,
   };
  // below is to handle the edge case that someone just wants to donate (no mammal involved)
  location.state ? mammal = location.state : mammal = placeHolder;
  console.log("Payment confirmation mammal; ", mammal);
  const [sponsoredMammals, setSponsoredMammals] = useState([]);
  // should add axios request in here to /api/somerthing/paymentconfirm/:id
  // this needs testing. Is this supposed to be a POST request?
  useEffect(() => {
    // this might be tricky given ther are two ids required (spons and mammal)
    // const MagooId =localStorage.getItem("userId");
    // currently the sponsor 1 is hard coded into the db query
    Axios.post(`/api/sponsoredmammals/${mammal.id}`)
      .then((result) => {
        console.log(
          "what is this result.data.sponsoredmammals",
          result.data.sponsoredmammals
        );
        setSponsoredMammals(result.data.sponsoredmammals);
      })
      .catch((err) => {
        console.log("New sponsoring of mammal failed", err);
      });
  }, []);

  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h4" gutterBottom align="left">
          Checkout
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="body1" gutterBottom align="left">
          * We've auto-filled your payment details based on the saved payment
          information you provided
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" gutterBottom align="left">
          Shipping & Billing Information
        </Typography>
      </Box>

      <Box mt={2}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Name"
            defaultValue="Carol Rosen"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Email"
            defaultValue="carol@gmail.com"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
            id="outlined-disabled"
            label="Country"
            defaultValue="Canada"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5}>
        <Typography variant="h6" gutterBottom align="left">
          Payment Information
        </Typography>
      </Box>

      <Box mt={2}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Name on Card"
            defaultValue="Carol Rosen"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Card Number"
            defaultValue="XXXX - XXXX - XXXX - XXXX"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Security Code"
            defaultValue="XXX"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/postpayment">
          <Button variant="contained" color="primary" size="large">
            Confirm Payment
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
