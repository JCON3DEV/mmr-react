import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container } from '@material-ui/core';

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
      <ul>
        <li> List of the Mammels on the DB. File mammals.jsx</li>
        {mammals.map((item) => (
          <li key={item.id}>{item.mammal_name}</li>
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
    </Container>
  );
}
export default Mammals;