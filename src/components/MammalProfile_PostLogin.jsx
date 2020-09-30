import React from "react";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//Semantic UI Components
import {Image} from "semantic-ui-react";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MammalProfile_PostLogin(props) {
  const classes = useStyles();
  return(
    <Container maxWidth="sm">
      <Box mt={9}>
        <Image src="/docs/seals/boris_sm.jpg"/>
      </Box>

      <Box mt={3}>
        <Typography variant="h4" gutterBottom align="center">
          BORIS
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          date admitted: 2020/07/03
        </Typography>
        <Divider />
      </Box>

      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          story
        </Typography>
        <Typography variant="body1" gutterBottom>
          Boris is an orphaned male seal pup; rescued near Kyuquot after being discovered by a member of the public. Believed to be just 10 days old, he weighed just 1.76 kg when he was admitted.
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/donate">
          <Button variant="contained" color="primary" size="large">
            Sponsor Me
          </Button>
        </Link>
      </Box>

      <Box mt={3} mb={3}>
        <Typography variant="h4" gutterBottom>
          gallery
        </Typography>
        <Image src="/docs/other/profile-fade.png"/>
      </Box>
    </Container>
  );
}