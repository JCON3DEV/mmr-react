import React from "react";
import {Link} from "react-router-dom";
import SubscribeForUpdates from "./SubscribeForUpdates";
import Footer from "./Footer";

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

// Footer
// import Footer from "./components/Footer.jsx";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

//Semantic UI Components
import {Image} from "semantic-ui-react";
import MammalProfileMimi from "./MammalProfileMimi";

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
        <Image src="/docs/other/home-seals.png" size="medium" />
      </Box>
      <Box mt={4} className={classes.root}>
        <Typography variant="body1" gutterBottom align="center">
          Your symbolic adoption makes for a perfect, green gift for animal
          lovers and comes with a personalized adoption certificate and a social
          media badge to share your adoption with the world.
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
                  Boris is now in fish school. He is currently learning how to
                  eat fish on his own.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Box>

      <Box mt={3}>
        <Link className="link" to={`MammalProfileMimi`}>
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
                  own and that she can compete for food with other harbour
                  seals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
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
        <a href="https://www.instagram.com/marinemammalrescue/" target="_self">
          <Image
            src="/docs/other/mmr-gallery.png"
            className={classes.map}
            fluid
          />
        </a>
      </Box>
      <Footer />
    </Container>
  );
}
