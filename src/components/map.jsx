import React from "react";
import {ExternalLink} from "react-external-link";
import {Container, Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import Iframe from "react-iframe";

export default function map(props) {
  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <a href="www.google.com">
          <iframe
            src="www.google.com"
            width="640"
            height="939"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </a>
      </Box>
    </Container>
  );
}
