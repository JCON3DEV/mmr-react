import React from "react";

// Navigation and routes
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "90%",
    maxWidth: 375,
  },
  map: {
    maxWidth: "100%",
  },
});

export default function PaymentConfirm(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Post-Payment
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/myseals">
          <Button variant="contained" color="secondary" size="large">
            See Your Seals
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
