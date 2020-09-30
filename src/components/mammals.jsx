import React, { useState, useEffect } from 'react';
import axios from "axios";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Styles/Components
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "../App.css";

//Experimental Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 325,
  },
  image: {
    maxWidth: "93%",
  },
});

function Mammals() {
  const [mammals, setMammals] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    axios.get("/api/mammals")
    .then((result) => {
      setMammals(result.data.mammals);
      // console.log("This is the Mammals RESULT;", result.data.mammals);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <h3>Mammals page</h3>
      <ul>
        <li> List of the Mammels on the DB. File mammals.jsx</li>
        {mammals.map((item) => (
          <li key={item.id}>
            <Box>
              <Typography variant="h4" gutterBottom align="center">
                {item.mammal_name}
              </Typography>
              {"\n"}
              {/* {item.profile_pic} */}
              <img
                size="small"
                alt="a seal"
                key={item.id}
                // src={`../..${item.profile_pic}`}
                // process .env in this case measn the default for the public folder. This is so react understands the correct path.
                src={process.env.PUBLIC_URL + item.profile_pic}
                // className="img-responsive"
                className={classes.image}
              />
            </Box>
          </li>
        ))}
        {/* age 
            weight
            bio 
            date_admitted 
            date_released 
            profile_pic 
            sponsored
        */}
      </ul>
      <Link className="link" to="/">
        <Button variant="contained" color="primary" size="large">
          home
        </Button>
      </Link>
    </Container>
  );
}
export default Mammals;