import React, { useState, useEffect } from 'react';
import axios from "axios";

// Navigation / Routes
import { Link, useParams } from "react-router-dom";

//General Styles/Components
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "../App.css";

//Experimental Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 325,
  },
  image: {
    maxWidth: "100%",
  },
});

function Mammals() {
  const [mammals, setMammals] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    axios.get("/api/mammals")
    .then((result) => {
      setMammals(result.data.mammals);
    });
  }, []);

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        ---
      </Typography>
      <h3>Mammals page</h3>
      <h2> List of the Mammels on the DB. File mammals.jsx</h2>
      <Box mt={3}>
        <div class="ui six doubling cards">
          <div className="card">
            <div className="image">
              <>
                {mammals.map((item) => (
                  <li key={item.id}>
                    <Box>
                      <img
                        width="300"
                        src={process.env.PUBLIC_URL + item.profile_pic}
                        alt="Rescued Seal"
                      />
                    </Box>
                    <p>
                      <em>
                        <strong>{item.mammal_name}</strong>
                      </em>
                    </p>
                  </li>
                ))}
              </>
            </div>
          </div>
        </div>
      </Box>
      {/* age 
          weight
          bio 
          date_admitted 
          date_released 
          profile_pic 
          sponsored
      */}

      <Link className="link" to="/">
        <Button variant="contained" color="primary" size="large">
          home
        </Button>
      </Link>
    </Container>
  );
}
export default Mammals;