import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

//General Styles/Components
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "../App.css";

// Seal Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

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

const formatDate = (dateString) => {
  if (typeof dateString !== "undefined") {
    return new Date(dateString.replace(" ", "T")).toString();
  } else {
    return "";
  }
};

const MyMammalEvents = function (props) {
  const [myEvents, setMyEvents] = useState([]);
  const classes = useStyles();

  // ----------------------------
  const params = useParams();
  console.log("this is params:", params);
  useEffect(() => {
    // Below needs to be hardcoded because we are cheating
    axios
      .get(`/api/events/${params.id}/uniqueevents`)
      .then((result) => {
        console.log("THIS IS RESULT ----->", result.data.events);
        setMyEvents(result.data.events);
      })
      .catch((err) => {
        console.log("Unique event list not found!", err);
      });
  }, []);

  return (
    <Box mt={3} className={classes.root}>
      {myEvents.map((item) => (
        <>
          <Box mt={3}>
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
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <em>October 8th, 2020 - 2pm</em>
                    {/* <em>{formatDate(item.date_time)}</em> */}
                    {<br />}
                    <em>{item.location}</em>
                    {<br />}
                    Come join us on an epic hunt for the fabled Rocky Road!
                    Where marshmallows and gumdrops live.
                    {/* {item.link} */}
                  </Typography>
                  <CardActions>
                    <Box mt={2}>
                      <Button
                        onClick={props.onOpen(item)}
                        onClose={props.onClose}
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        RSVP
                      </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </>
      ))}
    </Box>
  );
};
export default MyMammalEvents;
