import React from "react";
import {Link} from "react-router-dom";

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

// Social Media Icons
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

// Subscribe Toggle Button
import ToggleButton from '@material-ui/lab/ToggleButton';

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
    '& > *': {
      margin: theme.spacing(1),
    }
  }
}));

export default function Home(props) {
  const classes = useStyles();
  //Handles toggle state
  const [selected, setSelected] = React.useState(false);


  return (
    <Container>
      <Box mt={10} className={classes.root}>
        <Typography variant="h4" gutterBottom align="center">
          Latest Admissions
        </Typography>
      </Box>

      <Box mt={3} className={classes.root}>
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
          <CardActions>
            <Button variant="contained" size="small" color="secondary">
              <Link className="link" to="/mammalprofile">
                Read More
              </Link>
            </Button>
          </CardActions>
        </Card>
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
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
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
        <a href="https://www.tiktok.com/@marinemammalrescue?language=en&sec_uid=MS4wLjABAAAAzuA0CPS_YLo_eESQMq-_kRMYDaJFKSvWuukYnHoiwzEYOpIp4eA_4JgBeW2CTt6b&share_app_name=musically&timestamp=1585593360&u_code=d9bemeh416e103&user_id=6760805983751111685&utm_campaign=client_share&utm_medium=android&utm_source=copy&source=h5_m" target="_self">
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
            <IconButton aria-label="instagram" color="primary" >
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="youtube" color="primary" fontSize="large">
              <YouTubeIcon />
            </IconButton>
            <IconButton aria-label="facebook" color="primary" >
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter icon" color="primary" >
              <TwitterIcon />
            </IconButton>
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
          The Marine Mammal Rescue Centre is an Ocean Wise Initiative. Charitable registration No. 11928 2119 RR0001 (Canada) · 98-0050185 (USA).
        </Typography>
      </Box>
      <Box mt={4} mb={5}>
        <Typography variant="body2" gutterBottom align="center">
          PATIENT DIRECTORY AND SYMBOLIC ADOPTION PROGRAM OPERATED BY BC MARINE MAMMAL RESCUE SOCIETY
        </Typography>
      </Box>
    </Container>
  );
}
