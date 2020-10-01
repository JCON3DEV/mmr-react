import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";

function Sponsor() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    axios.get("/api/sponsors/").then((result) => {
      setSponsors(result.data.sponsors)
      // console.log("THIS IS RESULT; ", result.data.sponsors)
      // console.log("THIS IS sponsors; ", sponsors);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <ul>
        <li> List of the sponsors from db. file; sponsors.jsx</li>
        {sponsors.map((el) => (
          <li key={el.id}>{el.sponsor_name}</li>
        ))}
        {/* Below is a list of all the remaining table rows; */}

      </ul>
    </Container>
  );

}
export default Sponsor;