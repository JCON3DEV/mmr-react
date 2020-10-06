import React from "react";
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Footer from "./Footer";

//Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

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
          Update your account information by editing your saved profile
          information in the text fields below.
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

      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" size="normal" color="primary">
          Submit
        </Button>
      </Box>

      <Footer />
    </Container>
  );
}
