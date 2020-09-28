import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import MammalProfile from "./components/MammalProfile";
import LiveEvent from "./components/LiveEvent";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            {/* <li><Link to="/mammalprofile">MammalProfile</Link></li> */}
            {/* <li><Link to="/liveevent">LiveEvent</Link></li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mammalprofile">
            <MammalProfile />
          </Route>
          <Route path="/liveevent">
            <LiveEvent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
