import { Container } from "@material-ui/core";
import React from "react";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Styles/Components
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// Router imports
import Button from "@material-ui/core/Button";


//Controls components based on maxWidth
// const useStyles = makeStyles({
//   root: {
//     width: "90%",                                                                                              
//     maxWidth: 375,
//   },
// });

export default function MammalProfile(props) {
  return (
    // <h3>TESTING Mammel profile page</h3>
    <Container>  
      <h1>This is Mammal Profile Blocked</h1>
      <Link className="link" to="/donate">
        <Button variant="contained" color="primary" size="large">
          donate
        </Button>
      </Link>
    </Container>
  );
}
