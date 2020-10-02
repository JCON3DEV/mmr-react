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

const MyMammalEvents = function () {
  const [myEvents, setMyEvents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // Below needs to be hardcoded because we are cheating
    axios.get("/api/events").then((result) => {
      console.log("THIS IS RESULT ----->", result.data.events);
      setMyEvents(result.data.events);
    });
  }, []);
  
  return (
    <Box mt={3} className={classes.root}>
      {myEvents.map((item) => (
        <>
        <Card>
          <CardActionArea>
          {/* <CardMedia  
            key={item.id}
            component="img"
            alt="Adorable seal"
            height="140"
            image={process.env.PUBLIC_URL + item.profile_pic}
            title={item.mammal_name}
          /> */}

          <CardContent key={item.id}>
            <Typography gutterBottom variant="h5" component="h2">
              {item.short_description}
              {/* Ice Cream Hunt */}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.location}
              {<br />}
              Come join us on an epic hunt for the fabled Rocky Road! Where
              marshmellows and gumdrops live.
              {/* {item.link} */}
            </Typography>
            <CardActions>

              <Button size="small" color="primary">
                Attend
              </Button>
            </CardActions>
          </CardContent>
          </CardActionArea>
        </Card>
        </>

        // {/* ))} */}
      ))}
    </Box>
  );  
};
export default MyMammalEvents;