import React from "react";

// Navigation and routes
import {Link, useLocation} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

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
  const location =useLocation();
  console.log("this is location.state.mammal on post payment page;", location.state.mammal);
  const classes = useStyles();
  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={18}>
        {location.state.mammal.mammal_thank_you ? (
          <>
            <Typography variant="h3" gutterBottom align="center">
              Thank you for donating to {location.state.mammal.mammal_thank_you}!
            </Typography>
            <Box mt={3}>
              <Image src="/docs/other/sealvector.png" size="small" centered />
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h3" gutterBottom align="center">
              Thank you for sponsoring {location.state.mammal.mammal_name}!
            </Typography>
            <Box mt={3}>
              <Image
                src={location.state.mammal.profile_pic}
                size="small"
                centered
              />
            </Box>
          </>
        )}
      </Box>

      <Box mt={5}>
        {location.state.mammal.mammal_thank_you ? (
          <Typography variant="h5" gutterBottom align="center">
            With your donation to the rescue centre, you've helped us care for
            {" " + location.state.mammal.mammal_thank_you} and the more than 100
            marine mammals we rescue, rehabilitate, and release every year.
          </Typography>
        ) : (
          <Typography variant="h5" gutterBottom align="center">
            With your donation to the rescue centre, you've helped us care for
            {" " + location.state.mammal.mammal_name} and more than the 100
            marine mammals we rescue, rehabilitate, and release every year.
          </Typography>
        )}
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

      <Footer />
    </Container>
  );
}
