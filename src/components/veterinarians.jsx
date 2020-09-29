import React, { useState, useEffect } from "react";
import axios from "axios";

function Veterinarians() {
  const [veterinarians, setVeterinarians] = useState([]);

  useEffect(() => {
    axios.get("/api/veterinarians ").then((result) => {
      setVeterinarians(result.data.veterinarians);
      console.log("THIS IS RESULT; ", result.data.veterinarians);
      console.log("THIS IS veterinarians; ", veterinarians);
    });
  }, []);

  return (
    <div>
      <ul>
        <li> List of the veterinarians from db. file; veterinarians.jsx</li>
        {veterinarians.map((el) => (
          <li key={el.id}>{el.staff_name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Veterinarians;
