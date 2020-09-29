import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        <ul>
          <li> List of the sponsors from db. file; sponsors.jsx</li>
          {sponsors.map(el => (
            <li key={el.id}>{el.sponsor_name}</li>
            ))}
        </ul>
      </div>
    );


}
export default Sponsor;

// below was my orriginal attempot. IT IS WRONG
// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// const [sponsors, setSponsors] = useState({ });

// useEffect(() => {
//   axios.get("/api/sponsors/")
//   .then((result) => setSponsors(result.data));
// }, []);

// const sponsorList = sponsors.map((item) => {  
//   return (
//     // html goes here;
//     <ul>{item.sponsor_name}</ul>
//   )
// })

// export default function sponsor() {
//   return sponsorList;
// }


