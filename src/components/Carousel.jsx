import React from "react";
import "../App.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 325,
  },
  slider: {
    color: "green",
  },
});

export default function Carousel() {
  return (
    <Container>
      <Box mt={10} ml={3} className={"slider"}>
        <Slider
          className={"slick-active"}
          arrows={true}
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          speed={200}
          color={"blue"}
        >
          <img
            src={
              "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/07/DSC05570.jpg"
            }
            width="100%"
            alt="text"
          />
          <img
            src={
              "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/07/DSC08769.jpg"
            }
            width="100%"
            alt="text"
          />
          <img
            src={
              "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/07/DSC00094.jpg"
            }
            width="100%"
            alt="text"
          />
          <img
            src={
              "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/07/DSC03824.jpg"
            }
            width="100%"
            alt="text"
          />
          <img
            src={
              "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/06/DSC00934.jpg"
            }
            width="100%"
            alt="text"
          />
          <img
            src={
              "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/07/DSC03503.jpg"
            }
            width="100%"
            alt="text"
          />
        </Slider>
      </Box>
    </Container>
  );
}
