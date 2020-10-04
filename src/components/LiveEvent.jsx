import React from "react";
import YouTube from "react-youtube";
import {makeStyles} from "@material-ui/core/styles";

import {Link, useLocation} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "../liveevent.css";
import {useState} from "react";

const LiveEvent = function (props) {
  const location = useLocation();
  // console.log("======================>", location.state);
  const opts = {
    height: "100vh", //390",
    width: "100%", //"640",
    // device screen spec; W: 414 H: 895.83
    // can we use style="width:100%;height:auto;"
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Container maxWidth="sm" style={{height: "100vh"}}>
      <Box mt={8} mb={1} display="flex" justifyContent="center">
        <Link className="link" to="/postevent">
          <Button variant="contained" color="primary" size="large">
            Close Stream
          </Button>
        </Link>
      </Box>
      <iframe
        title="liveevent"
        width="1280"
        height="720"
        // src="https://www.youtube.com/embed/xV2zvZDVw4g"
        src={location.state.url}
        // src={`${url}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
};

export default LiveEvent;
