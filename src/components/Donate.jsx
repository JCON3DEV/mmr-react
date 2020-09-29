import React from 'react'

//General Styles/Components
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//Semantic UI Components
import { Image } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'


//Controls components based on maxWidth 
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 375
  },
});

export default function Donate(props) {
  const classes = useStyles();

  //Code to handle donation amount toggles
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return(
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        ----- donate -----
      </Typography>  

      <Box mt={5}>
        <Typography variant="h3" gutterBottom>
          Save Our Seals
        </Typography>

        <Typography variant="h5" gutterBottom>
          ADOPT BORIS
        </Typography>
      </Box>

      <Box mt={4}>
        <Image src="/docs/other/sealvector.png" size='medium' centered />
      </Box>

      <Box mt={4}>
        <Button.Group size='large' inverted color='red'>
          <Button>$25</Button>
          <Button>$50</Button>
          <Button>$100</Button>
        </Button.Group>
      </Box>
    </Container>
  );
}