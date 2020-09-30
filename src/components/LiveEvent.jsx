import React from "react";
import YouTube from "react-youtube";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

//import a new css file for iframe {height:100vh

export default class Example extends React.Component {
  render() {
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
          <Button variant="contained" color="secondary" size="large">
            <Link to="/postevent">Close Stream</Link>
          </Button>
        </Box>
        <YouTube
          videoId="CsdUiRlJMH4"
          opts={opts}
          onReady={this._onReady}
          style={{height: "100vh"}}
        />
        <div
          style={{height: "100vh"}}
          class="ui embed"
          data-url="https://www.youtube.com/watch?v=CsdUiRlJMH4"
          data-placeholder="/images/bear-waving.jpg"
        ></div>
      </Container>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
