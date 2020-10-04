import React from "react";
import {Link} from "react-router-dom";
import SubscribeForUpdates from "./SubscribeForUpdates";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

// Seal Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// Material UI Text Field Component
import TextField from "@material-ui/core/TextField";

// Social Media Icons
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

//Semantic UI Components
import {Image} from "semantic-ui-react";

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },
  map: {
    maxWidth: "100%",
  },
  iconStyles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Box mt={9}>
        <Image src="/docs/other/home-mmr.jpg" />
      </Box>
      <Box mt={2} className={classes.root}>
        <Typography variant="h4" gutterBottom align="center">
          Marine Mammal Rescue Centre
        </Typography>
      </Box>
      <Box mt={3}>
        <Divider />
      </Box>

      <Box mt={3} className={classes.root}>
        <Typography variant="h5" gutterBottom align="center">
          Welcome to our latest initiative
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          <strong>SAVE OUR SEALS</strong>
        </Typography>
      </Box>
      <Box mt={5} mb={3} display="flex" justifyContent="center">
        <Image src="/docs/other/home-seals.png" size="medium"/>
      </Box>
      <Box mt={4} className={classes.root}>
        <Typography variant="body1" gutterBottom align="center">
          Your symbolic adoption makes for a perfect, green gift for animal lovers and comes with a personalized adoption certificate and a social media badge to share your adoption with the world.
        </Typography>
      </Box>
      <Box mt={3}>
        <Divider />
      </Box>

      <Box mt={5} className={classes.root}>
        <Typography variant="h5" gutterBottom align="center">
          Latest Admissions
        </Typography>
      </Box>
      <Box mt={3} className={classes.root}>
        <Link className="link" to={`mammalprofile`}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Seal"
                height="140"
                image="/docs/seals/boris.jpg"
                title="Contemplative Seal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Boris
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Boris is now in fish school. He is currently learning how to eat
                  fish on his own.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Box>

      <Box mt={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Seal"
              height="140"
              image="/docs/seals/otis.jpg"
              title="Contemplative Seal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mimi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Mimi has demonstrated that she is confident eating fish on her
                own and that she can compete for food with other harbour seals.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box mt={3} display="flex" justifyContent="center">
        <Link className="link" to="/mammals">
          <Button variant="contained" color="primary" size="large">
            See All Patients
          </Button>
        </Link>
      </Box>

      <Box mt={6} className={classes.root}>
        <Typography variant="h4" gutterBottom align="center">
          What We Do
        </Typography>

        <Typography variant="h5" gutterBottom align="center">
          Each year, our rescue program saves over 100 marine mammals and
          rehabilitates them for release back into their natural habitat.
        </Typography>
      </Box>

      <Box mt={8} className={classes.root}>
        <a href="https://tracking.ocean.org/patients/" target="_self">
          <Image
            src="/docs/other/trackermap.png"
            className={classes.map}
            fluid
          />
        </a>
      </Box>

      <Box mt={6} className={classes.root}>
        <Typography variant="h4" gutterBottom align="center">
          About Tracking
        </Typography>

        <Typography variant="h5" gutterBottom align="center">
          Every season, we track a small number of animals released by our
          rescue team.
        </Typography>
      </Box>

      <Box mt={8} className={classes.root}>
        <a
          href="https://www.tiktok.com/@marinemammalrescue?language=en&sec_uid=MS4wLjABAAAAzuA0CPS_YLo_eESQMq-_kRMYDaJFKSvWuukYnHoiwzEYOpIp4eA_4JgBeW2CTt6b&share_app_name=musically&timestamp=1585593360&u_code=d9bemeh416e103&user_id=6760805983751111685&utm_campaign=client_share&utm_medium=android&utm_source=copy&source=h5_m"
          target="_self"
        >
          <Image
            src="/docs/other/mmr-gallery.png"
            className={classes.map}
            fluid
          />
        </a>
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
              <IconButton aria-label="youtube" color="primary" fontSize="large">
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

        <Box mt={2} fullWidth display="flex" justifyContent="center">
          {/* <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          > */}
          {/* <SubscribeForUpdates /> */}
            {/* Subscribe for updates */}
          {/* </ToggleButton> */}

          <Typography variant="body2" gutterBottom align="center">
            <em>Sign up for our weekly newsletter</em>
          </Typography>
        </Box>
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="standard-required"
            label="Email"
            variant="outlined"
            id="standard-size-normal"
          />
        </form>
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="contained" size="normal" color="primary">
          Submit
        </Button>
      </Box>

      <Box mt={4}>
        <Divider />
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
          PATIENT DIRECTORY AND SYMBOLIC ADOPTION PROGRAM OPERATED BY BC MARINE
          MAMMAL RESCUE SOCIETY
        </Typography>
      </Box>
    </Container>
  );
}
