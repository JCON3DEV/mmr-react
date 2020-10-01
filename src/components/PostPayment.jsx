import React from 'react'

// Navigation and routes
import { Link } from "react-router-dom";

//General Styles/Components
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

//Semantic UI Components
import { Image } from 'semantic-ui-react';

//Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 375,
  },
});

export default function PaymentConfirm(props) {
  const classes = useStyles();

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
          With your donation to the rescue centre, you've helped us care for Boris and the more than 100 marine mammals we rescue, rehabilitate, and release every year. 
        </Typography>


      </Box>

      <Box mt={5} display="flex" justifyContent="center">
        <Link className="link" to="/myseals">
          <Button variant="contained" color="secondary" size="large">
            See Your Seals
          </Button>
        </Link>
      </Box>
      <Box mt={1} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/myseals">
          <Button variant="contained" color="primary" size="large">
            See our Tracker Map
          </Button>
        </Link>
      </Box>
    </Container>
  );
}