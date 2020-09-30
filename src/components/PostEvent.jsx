import React from "react";
import {Link} from "react-router-dom";
//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function SimpleCard() {
  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Thanks for joining us!
        </Typography>

        <Typography variant="h6" gutterBottom align="center">
          Don't miss out on our next event.
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Sign up for our newsletter!
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Button variant="contained" color="secondary" size="large">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </Box>
    </Container>
  );
}
