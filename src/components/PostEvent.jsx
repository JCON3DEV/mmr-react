import React from "react";
import {Link} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

//Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Divider from "@material-ui/core/Divider";

//Semantic UI Components
import {Image} from "semantic-ui-react";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },

  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function PostEvent() {
  const classes = useStyles();

  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={15}>
        <Typography variant="h4" gutterBottom align="center">
          That was flippin' amazing!
        </Typography>
        <Box mt={3}>
          <Image src="/docs/other/thankyou-seal.png" size="medium" centered />
        </Box>
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom align="center">
          Thanks for joining us, and we hope you learned something new!
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="body1" gutterBottom align="center">
          Stay up to date on all the latest news and events by signing up for
          our weekly newsletter:
        </Typography>

        <Box mt={1} display="flex" justifyContent="center">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            Sign Me Up
          </ToggleButton>
        </Box>
      </Box>

      <Box mt={1} mb={5} display="flex" justifyContent="center">
        <Button variant="contained" color="secondary" size="large">
          <Link className="link" to="/">
            "Sea" you later!
          </Link>
        </Button>
      </Box>

      <Box mt={8}>
          <Divider />
        </Box>

        <Box mt={5}>
          <Typography variant="h5" gutterBottom align="center">
            FOLLOW US
          </Typography>

          <Box mt={1} display="flex" justifyContent="center">
            <div className={classes.iconStyles}>
              <a
                href="https://www.instagram.com/marinemammalrescue/?hl=en"
                target="_self"
              >
                <IconButton aria-label="instagram" color="primary">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7BIY40WypVskXod63fu-Tw"
                target="_self"
              >
                <IconButton
                  aria-label="youtube"
                  color="primary"
                  fontSize="large"
                >
                  <YouTubeIcon />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/vammrc/" target="_self">
                <IconButton aria-label="facebook" color="primary">
                  <FacebookIcon />
                </IconButton>
              </a>
              <a href="https://twitter.com/marmamrescue?lang=en" target="_self">
                <IconButton aria-label="twitter icon" color="primary">
                  <TwitterIcon />
                </IconButton>
              </a>
            </div>
          </Box>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom align="center">
            STAY INFORMED
          </Typography>

          <Box mt={1} display="flex" justifyContent="center">
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              Subscribe for updates
            </ToggleButton>
          </Box>
        </Box>

        <Box mt={3}>
          <Typography variant="body1" gutterBottom align="center">
            The Marine Mammal Rescue Centre is an Ocean Wise Initiative.
            Charitable registration No. 11928 2119 RR0001 (Canada) · 98-0050185
            (USA).
          </Typography>
        </Box>
        <Box mt={4} mb={5}>
          <Typography variant="body2" gutterBottom align="center">
            PATIENT DIRECTORY AND SYMBOLIC ADOPTION PROGRAM OPERATED BY BC
            MARINE MAMMAL RESCUE SOCIETY
          </Typography>
        </Box>
    </Container>
  );
}
