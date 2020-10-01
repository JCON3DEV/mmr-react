import React, { useState, useEffect } from "react";
import axios from "axios";

//General Styles/Components
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "../App.css";

// Seal Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

//Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 375,
  },
  map: {
    maxWidth: "100%",
  },
});

const MyMammalEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // Below needs to be hardcoded because we are cheating
    axios.get("/api/events").then((result) => {
      console.log("THIS IS RESULT ----->", result);
      setMyEvents(result);
    });
  }, []);

  return (
    <Box mt={3} className={classes.root}>
      <Card>
        <CardActionArea>
            {myEvents.map((item) => (
          
              <>
                {/* <CardMedia
                  key={item.id}
                  component="img"
                  alt="Adorable seal"
                  height="140"
                  image={process.env.PUBLIC_URL + item.profile_pic}
                  title={item.mammal_name}
                /> */}

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {/* {item.mammal_name} */}
                    Ice Cream HUnt
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {/* {item.bio} */}
                    Come join us on an epic hunt for the fabled Rocky Road! Where marshmellows and gumdrops live.
                  </Typography>
                </CardContent>
              </>
          
          ))}
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">
            Attend
          </Button>
        </CardActions>

      </Card>
    </Box>
  );  
};
export default MyMammalEvents;
