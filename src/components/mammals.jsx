import React, { useState, useEffect } from 'react';
import axios from "axios";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Styles/Components
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
<<<<<<< HEAD
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import "../App.css";

//Experimental Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "90%",
    maxWidth: 325,
  },
  image: {
    maxWidth: "100%",
  },
});
=======
>>>>>>> master

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
    <Container className={classes.root}>
      <h3>Mammals page</h3>
      <ul>
        <li> List of the Mammels on the DB. File mammals.jsx</li>
        {mammals.map((item) => (
          <li key={item.id}>
            {item.mammal_name}
            {"\n"}
            {/* {item.profile_pic} */}
            <img
              alt="a seal"
              key={item.id}
              // src={`../..${item.profile_pic}`}
              // process .env in this case measn the default for the public folder. This is so react understands the correct path.
              src={process.env.PUBLIC_URL + item.profile_pic}
              // className="img-responsive"
              className={classes.image}
            />
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