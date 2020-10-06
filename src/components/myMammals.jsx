import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
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
  textColor: {
    color: "#000000",
  }
});

const MyMammals = () => {
  const [myMammals, setMyMammals] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // below would be on the login button;
    localStorage.setItem("userId", 1);
    // found on dev tools under application>Storage
    // one below would be where you want to use the id;
    const MagooId = localStorage.getItem("userId");

    // Below is hardcoded to sponsor 1 using MagooId because we are cheating
    axios.get(`/api/sponsors/${MagooId}/mammals`).then((result) => {
      // Filtering the returned object here would be a better solution for 
      // having sponsored duplicate mammals
      setMyMammals(result.data.mammals);
    });
  }, []);

  return (
    <Box mt={3} className={classes.root}>
      <>
        {myMammals.map((item) => (
          <>
          <Box mt={4}>
            <Card>
              {/* The address seals/${item.id} is set on App.js to the correct view */}
              <Link className="link" to={`/seals/${item.id}`}>
                <CardActionArea>
                  <CardMedia
                    key={item.id}
                    component="img"
                    alt="Adorable seal"
                    height="180"
                    image={process.env.PUBLIC_URL + item.profile_pic}
                    title={item.mammal_name}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center" className={classes.textColor}>
                      {item.mammal_name}
                      {/* Boris */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>

          </Box>
          </>
        ))}
      </>
    </Box>
  );
};
export default MyMammals;
