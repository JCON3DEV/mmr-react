import React from "react";
import FormControl from "@material-ui/core/FormControl";

import {
  Container,
  Box,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
} from "@material-ui/core";

export default function ContactUs(props) {
  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography>
          <h4>CONTACT US!</h4>
        </Typography>
        <p>
          We'd love to hear from you. Please complete the form or send us an
          email - we'll get back to you as soon as we can!
        </p>
        <h5> PHONE</h5>
        <p>604-659-3752</p>
        <h5> E-mail</h5>
        <p>
          <em>publicrelations@ocean.org</em>
        </p>
      </Box>
    </Container>
  );
}
