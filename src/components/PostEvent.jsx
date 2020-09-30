import React from "react";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

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
          <h3>Thank you for joining us!</h3>
        </Typography>

        <div class="ui checkbox">
          <input type="checkbox" name="example"></input>
          <label>Sign up for our weekly newsletter!</label>
        </div>
      </Box>
    </Container>
  );
}
