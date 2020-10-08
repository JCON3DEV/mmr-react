import React from "react";
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "./Footer";

//Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";
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

export default function PostEvent() {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" gutterBottom align="center">
          That was flippin' amazing!
        </Typography>
        <Box mt={3}>
          <Image src="/docs/other/thankyou-seal.png" size="medium" centered />
        </Box>
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom align="center">
          Thanks for joining us, and we hope you learned something new!
        </Typography>
      </Box>

      <Box mt={5} display="flex" justifyContent="center">
        <Link className="link" to="/">
          <Button variant="contained" color="primary" size="large">
            "Sea" you later!
          </Button>
        </Link>
      </Box>

      <Footer />
    </Container>
  );
}

//added a comment to see if this will push my changes to github