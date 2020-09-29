import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from "axios";
import "./App.css";

// Main Components
import AboutUs from "./components/AboutUs";
import Checkout from "./components/Checkout.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Donate from "./components/Donate.jsx";
import Home from "./components/Home.jsx";
import LiveEvent from "./components/LiveEvent.jsx";
import FullMammalProfile from "./components/MammalProfile_Full.jsx";
import MammalProfile from "./components/MammalProfile.jsx";
import MySeals from "./components/MySeals.jsx";
import Nav from "./components/Nav.jsx";
import Notifications from "./components/Notifications.jsx";
import PaymentConfirm from "./components/PaymentConfirmation.jsx";
import PostEvent from "./components/PostEvent.jsx";

//Additional Test Components
import MissionStatement from "./components/MissionStatement"; //text component, about page
// import YouTube from "./components/youtube"; // working using react-youtube package

// Global Styles
import "fontsource-roboto"; //Roboto font family

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <Nav />
            <AboutUs />
            <Checkout />
            <ContactUs />
            <Donate />
            <Home />
            <LiveEvent />
            <FullMammalProfile />
            <MammalProfile />
            <MySeals />
            <Notifications />
            <PaymentConfirm />
            <PostEvent />

            <MissionStatement />
            {/* <YouTube /> */}

            <li>
              <Link to="/nav">Nav</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li><Link to="/mammalprofile">MammalProfile</Link></li> */}
            {/* <li><Link to="/liveevent">LiveEvent</Link></li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/nav">
            <Nav />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
