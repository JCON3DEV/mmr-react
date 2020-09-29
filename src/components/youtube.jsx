import React from "react";
import YouTube from "react-youtube";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default class Example extends React.Component {
  render() {
    const opts = {
      height: "253", //390",
      width: "413", //"640",
      // device screen spec; W: 414 H: 895.83
      // can we use style="width:100%;height:auto;"
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <Container maxWidth="sm">
        <YouTube videoId="WbI1_Z9Cs1A" opts={opts} onReady={this._onReady} />
      </Container>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
