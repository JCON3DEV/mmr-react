import React from 'react'

// Navigation and routes
import { Link } from "react-router-dom";

//General Styles/Components
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import "../paymentConfirmation.css";

export default function PaymentConfirm(props) {
  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Payment Confirmation
        </Typography>

        <Typography variant="h5" gutterBottom align="center">
          ADOPT BORIS
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/postpayment">
          <Button variant="contained" color="secondary" size="large">
            Confirm Payment
          </Button>
        </Link>
      </Box>
    </Container>
  );
}