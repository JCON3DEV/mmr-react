import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {Container, InputLabel, Input, FormHelperText} from "@material-ui/core";

export default function ContactUs(props) {
  return (
    <Container>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </Container>
  );
}
