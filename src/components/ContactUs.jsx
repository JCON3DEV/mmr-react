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
      {/* <div class="ui mini form">
        <div class="two fields">
          <div class="field">
            <label>First Name *</label>
            <input placeholder="First Name" type="text"></input>
          </div>
          <div class="field">
            <label>Last Name *</label>
            <input placeholder="Last Name" type="text"></input>
          </div>
          <div class="field">
            <label>Subject *</label>
            <input placeholder="Subject" type="text"></input>
          </div>
          <div class="field">
            <label>E-mail *</label>
            <input placeholder="E-mail" type="text"></input>
          </div>
          <div class="field" width="50">
            <label>Message</label>

            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div class="ui submit button">Submit</div>
      </div> */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSchraQZiZizbq0BDFIAQaMTbiEAam87_eT57kfkuzCGcVgiqQ/viewform?embedded=true"
        width="640"
        height="939"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        > Loading…
      </iframe>
    </Container>
  );
}
