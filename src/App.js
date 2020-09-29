import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";

// Main Components
import AboutUs from "./components/AboutUs";
// import Checkout from "./components/Checkout.jsx";
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
            {/* <Nav />
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
          <PostEvent /> */}

            {/* <li>
              <Link to="/nav">Nav</Link>
            </li>
            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
            <li>
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/liveevent">LiveEvent</Link>
            </li>
            <li>
              <Link to="/fullmammalprofile">FullMammalProfile</Link>
            </li>
            <li>
              <Link to="/fullmammalprofile">MammalProfile</Link>
            </li>
            <li>
              <Link to="/myseals">MySeals</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/nav">
            <Nav />
          </Route>
          <Route path="/aboutus">
            <MissionStatement />
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
          <Route path="/liveeventabc">
            <LiveEvent />
          </Route>
          <Route path="/fullmammalprofile">
            <FullMammalProfile />
          </Route>
          <Route path="/mammalprofile">
            <MammalProfile />
          </Route>
          <Route path="/myseals">
            <MySeals />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/paymentconfirm">
            <PaymentConfirm />
          </Route>
          <Route path="/postevent">
            <PostEvent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
