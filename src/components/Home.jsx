import React from 'react';

//General Styles/Components
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Seal Card Elements
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// Footer Elements
import Divider from '@material-ui/core/Divider';

//Semantic UI Components
import { Image } from 'semantic-ui-react';


//Controls components based on maxWidth 
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 375
  },
});

export default function Home(props) {
  const classes = useStyles();

  return(
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        ----- home -----
      </Typography>  

      <Typography variant="h4" gutterBottom>
        Latest Admissions
      </Typography>

      <Box mt={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/docs/seals/boris.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Boris
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Boris is now in fish school. He is currently learning how to eat fish on his own.
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
                Mimi has demonstrated that she is confident eating fish on her own and that she can compete for food with other harbour seals.
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
      
      <Box mt={3}>
        <Button variant="contained" color="primary">
          See All Patients
        </Button>
      </Box>

      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          What We Do
        </Typography>

        <Typography variant="h6" gutterBottom>
          The Vancouver Aquarium’s Marine Mammal Rescue Centre is a hospital and care facility for sick, injured or orphaned marine mammals. Each year, our rescue program saves over 100 marine mammals and rehabilitates them for release back into their natural habitat.
        </Typography>
      </Box>

      <Box mt={8}>
        <Image src="/docs/other/trackermap.png" fluid />
      </Box>

      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          About Tracking
        </Typography>

        <Typography variant="h6" gutterBottom>
          Every season, we track a small number of animals released by our rescue team. Before their release back into the wild, these animals are outfitted with satellite-linked transmitters. The transmitters provide valuable data about the travel patterns and progress of these rescued animals.
        </Typography>
      </Box>

      <Box mt={8}>
        <Divider />
      </Box>
    </Container>
  );
}