import React, {useState, useEffect} from "react";
import axios from "axios";
import Heart from "./Heart";

// Navigation / Routes
import {Link, useParams} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "../App.css";

// Seal Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

//Experimental Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 375,
  },
  image: {
    maxWidth: "100%",
  },
  textColor: {
    color: "#000000",
  }
});

function Mammals() {
  const [mammals, setMammals] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/mammals").then((result) => {
      setMammals(result.data.mammals);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Patient Directory
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom align="center">
          <strong>Current Patient Count: </strong>
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          45 patients on site, 87 admitted in 2020
        </Typography>
      </Box>

      <Box mt={3}>
        <Divider />
      </Box>

      <Box mt={3} mb={3} className={classes.root}>
        <>
          {mammals.map((item) => (
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
      {/* <h3>Mammals page</h3>
      <h2> List of the Mammels on the DB. File mammals.jsx</h2> */}

      {/* <Box mt={3} mb={5}>
        <div className="ui six doubling cards">
          <div className="card">
            <div className="image">
              {mammals.map((item) => (
                <li key={item.id}>
                  <Box m={1}>
                    {/* uncomment the heart if there's time to filter or see all favorited seals
                    <Heart /> */}
                    {/* <img
                      width="300"
                      src={process.env.PUBLIC_URL + item.profile_pic}
                      alt="Rescued Seal"
                    /> */}
                  {/* </Box> */}
                  {/* <p>
                    <em>
                      <strong>{item.mammal_name}</strong>
                    </em>
                  </p>
                </li>
              ))}
            </div>
          </div>
        </div> */}
      {/* </Box> */}

      {/* age 
          weight
          bio 
          date_admitted 
          date_released 
          profile_pic 
          sponsored
      */}
      {/* <Link className="link" to="/">
        <Button variant="contained" color="primary" size="large">
          home
        </Button>
      </Link> */}
    </Container>
  );
}

export default Mammals;
