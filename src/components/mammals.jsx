import React, { useState, useEffect } from 'react';
import axios from "axios";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Styles/Components
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function Mammals() {
  const [mammals, setMammals] = useState([]);

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
      <div>
        {mammals.map((item) => {
          
        })}
        
      </div>
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
            className="img-responsive"
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