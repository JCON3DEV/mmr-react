import React from "react";

// Navigation / Routes
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

//Semantic UI Components
import {Image} from "semantic-ui-react";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

// Hard coded Boris
const mammal = {
  id: 2,
  mammal_id: 1,
  mammal_name: "Boris",
  age: 4,
  weight: 120,
  bio:
    "Boris is an orphaned male seal pup; rescued near Kyuquot after being discovered by a member of the public. Believed to be just 5 months old, he weighed just 5.76 kg when he was admitted.",
  date_admitted: "2016-06-22 19:10:25-07",
  date_released: "2016-09-01 20:15:20-00",
  profile_pic: "/images/Boris.png",
  // event_id: 12,
  // admin_id: 1,
  sponsored: true,
};

export default function MammalProfile_PostLogin(props) {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={9}>
        <Image src="/docs/seals/boris_sm.jpg" />
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
          Boris is an orphaned male seal pup; rescued near Kyuquot after being
          discovered by a member of the public. Believed to be just 10 days old,
          he weighed just 1.76 kg when he was admitted.
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link
          className="link"
          to={{pathname: `/donate/${mammal.mammal_id}`, state: {mammal}}}
        >
          {console.log(mammal)}
          <Button variant="contained" color="primary" size="large">
            Sponsor Me
          </Button>
        </Link>
      </Box>

      <Box mt={3} mb={3}>
        <Image src="/docs/other/profile-fade.png" />
      </Box>

      <Footer />
    </Container>
  );
}
