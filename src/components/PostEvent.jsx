import React from "react";
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Toggle Button
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

//Semantic UI Components
import { Image } from 'semantic-ui-react';

export default function SimpleCard() {
  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={15}>
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

      <Box mt={2}>
        <Typography variant="body1" gutterBottom align="center">
          Stay up to date on all the latest news and events by signing up for our weekly newsletter:
        </Typography>

        <Box mt={1}display="flex" justifyContent="center">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            Sign Me Up
          </ToggleButton>
        </Box>
      </Box>

      <Box mt={1} mb={5} display="flex" justifyContent="center">
        <Button variant="contained" color="secondary" size="large">
          <Link className="link" to="/">
            "Sea" you later!
          </Link>
        </Button>
      </Box>
    </Container>
  );
}
