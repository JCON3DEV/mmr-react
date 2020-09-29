import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";

function Veterinarians() {
  const [veterinarians, setVeterinarians] = useState([]);

  useEffect(() => {
    axios.get("/api/veterinarians ").then((result) => {
      setVeterinarians(result.data.veterinarians);
      // console.log("THIS IS RESULT; ", result.data.veterinarians);
      // console.log("THIS IS veterinarians; ", veterinarians);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <ul>
        <li> List of the veterinarians from db. file; veterinarians.jsx</li>
        {veterinarians.map((el) => (
          <li key={el.id}>{el.staff_name}</li>
        ))}
        {/* Below is a list of all the remaining table rows; */}
        {/* bio
            years_of_experience
            staff_img  
        */}
      </ul>

    </Container>
  );
}
export default Veterinarians;
