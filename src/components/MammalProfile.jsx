import { Container } from "@material-ui/core";
import React from "react";
//General Styles/Components
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
import Donate from "./Donate";
// Router imports
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
    <Router>
      {/* <Container className={classes.root}> */}
        <h1>This is Mammal Profile Blocked</h1>
        <Route path="/donate" component={Donate}>
          <Button variant="contained" color="primary" size="large">
            See All Patients
          </Button>
        </Route>
      {/* </Container> */}
    </Router>
  );
}
