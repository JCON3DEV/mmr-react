import React from "react";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function MissionStatement() {
  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{backgroundColor: "#cfe8fc", height: "20vh"}}
      >
        <h3>Mission Statement</h3>
        <p>
          The SOS program will rescue any marine mammal. The Rescue Team is very
          careful to only admit animals that are in need of assistance (sick,
          injured, or legitimately abandoned). Many times the animals need
          rescuing as a result of human activity and interference
        </p>
      </Typography>

      {/* <Button variant="outlined" color="secondary">
        Volunteer With us
      </Button> */}
    </Container>
  );
}
