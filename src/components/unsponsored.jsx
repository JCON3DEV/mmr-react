import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';

function Unsponsored() {
  const [unsponsored, setUnsponsored] = useState([])

  useEffect(() => {
    axios.get("/api/mammals/unsponsored")
    .then((result) => {
      setUnsponsored(result.data.mammals)
      // console.log("This is the result of axios GET;..", result.data.mammals);
    });
  }, []);

  return (
    // <Container maxWidth="sm">
    //   <ul>
    //     <li> List of Unsponsored mammals. file; unsponsored.jsx</li>
    //     {unsponsored.map((item) => (
    //       <li key={item.id}>{item.mammal_name}</li>
    //     ))}
    //     {/* Below is a list of all the remaining table rows; */}
    //     {/* age 
    //         weight
    //         bio 
    //         date_admitted 
    //         date_released 
    //         profile_pic  
    //     */}
    //   </ul>
    // </Container>
    {unsponsored}
  );


}
export default Unsponsored

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Sponsor() {
//   const [sponsors, setSponsors] = useState([]);

//   useEffect(() => {
//     axios.get("/api/sponsors/").then((result) => {
//       setSponsors(result.data.sponsors);
//       // console.log("THIS IS RESULT; ", result.data.sponsors)
//       // console.log("THIS IS sponsors; ", sponsors);
//     });
//   }, []);

//   return (
//     <div>
//       <ul>
//         <li> List of the sponsors from db. file; sponsors.jsx</li>
//         {sponsors.map((el) => (
//           <li key={el.id}>{el.sponsor_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Sponsor;