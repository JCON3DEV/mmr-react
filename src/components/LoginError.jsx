import React from "react";

// Navigation / Routes
import {Link} from "react-router-dom";

//General Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Footer from "./Footer";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

//Semantic UI Components
import {Image} from "semantic-ui-react";
import {withTheme} from "@material-ui/styles";

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

  buttonStyles: {
    color: "#FFFFFF",
  },
}));

export default function LoginError(props) {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Seal-iously?
        </Typography>

        <Box mt={4}>
          <Image src="/docs/other/error-seal.png" size="medium" centered />
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom align="center">
          It looks like you're not logged in! Let's seal up that problem right
          now.
        </Typography>
        <Divider />
      </Box>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom align="center">
          Never sponsored before?
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" size="large">
          Create Account
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom align="center">
          Already a sponsor?
        </Typography>
      </Box>
      <Box mb={5} display="flex" justifyContent="center">
        <Button variant="outlined" color="primary" size="large">
          <Link className="link" to="/login">
            Login
          </Link>
        </Button>
      </Box>
      {/* Added Footer Component */}
      <Footer />
    </Container>
  );
}
