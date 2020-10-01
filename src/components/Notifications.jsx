import React from "react";
import {Link} from "react-router-dom";

//General Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../notifications.css";

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
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Notifications
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Button variant="contained" color="secondary" size="large">
          <Link className="link" to="/liveevent">
            Join Event Now
          </Link>
        </Button>
      </Box>
    </Container>
  );
}
