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

//Text Field Component
import TextField from '@material-ui/core/TextField';

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },

  fieldStyles: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90ch',
    },
  },
}));

export default function PaymentConfirm(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h4" gutterBottom align="left">
          Checkout
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="body1" gutterBottom align="left">
          * We've auto-filled your payment details based on the saved payment information you provided
        </Typography>
      </Box>

      <Box mt={3}>
      <Typography variant="h6" gutterBottom align="left">
          Shipping & Billing Information
        </Typography>
      </Box>

      <Box mt={2}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Name"
            defaultValue="Carol Rosen"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Email"
            defaultValue="carol@gmail.com"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
            id="outlined-disabled"
            label="Country"
            defaultValue="Canada"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5}>
      <Typography variant="h6" gutterBottom align="left">
          Payment Information
        </Typography>
      </Box>

      <Box mt={2}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Name on Card"
            defaultValue="Carol Rosen"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Card Number"
            defaultValue="XXXX - XXXX - XXXX - XXXX"
            variant="outlined"
          />
        </form>
      </Box>
      <Box mt={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Security Code"
            defaultValue="XXX"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/postpayment">
          <Button variant="contained" color="primary" size="large">
            Confirm Payment
          </Button>
        </Link>
      </Box>

    </Container>
  );
}