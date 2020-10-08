import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import "./notifications.css";
import Maps from "./components/Maps";
import Carousel from "./components/Carousel.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

import {StaticKitProvider} from "@statickit/react";
// import axios from "axios";

// Main Components
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs.jsx";
import Donate from "./components/Donate.jsx";
import Home from "./components/Home.jsx";
import LiveEvent from "./components/LiveEvent.jsx";
import Login from "./components/Login.jsx";
import LoginError from "./components/LoginError.jsx";
import MammalProfile_Full from "./components/MammalProfile_Full.jsx";
import MammalProfile from "./components/MammalProfile.jsx";
import MammalProfileMimi from "./components/MammalProfileMimi.jsx";
import MammalProfile_PostLogin from "./components/MammalProfile_PostLogin.jsx";
import MySeals from "./components/MySeals.jsx";
import MyMammalEvents from "./components/MyMammalEvents.jsx";
import MammalEvents from "./components/MammalEvents";
import Nav from "./components/Nav.jsx";
import Notifications from "./components/Notifications.jsx";
import PaymentConfirm from "./components/PaymentConfirmation.jsx";
import PostEvent from "./components/PostEvent.jsx";
import PostPayment from "./components/PostPayment";
import MyProfile from "./components/MyProfile";
import Footer from "./components/Footer.jsx";

// React functions to import array of objects from DB
import Sponsor from "./components/sponsors";
import Veterinarians from "./components/veterinarians";
import Mammals from "./components/mammals";
import UpcomingEvents from "./components/UpcomingEvents";

// import YouTube from "./components/youtube";
import Unsponsored from "./components/unsponsored";
// import map from "./components/map";

//Additional Test Components
import MissionStatement from "./components/MissionStatement"; //text component, about page
import liveEvent from "./components/LiveEvent.jsx";

export default function App() {
  console.log("This is loading?");
  return (
    <Router>
      <Nav />
      <ScrollToTop />
      <ScrollToTopButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* below is passing props as a child - the old way of pasing props*/}
        {/* Route component={LiveEvent} path="/liveevent" */}
        <Route path="/liveevent">
          <LiveEvent />
        </Route>
        {/* below included */}
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/donate">
          <Donate />
        </Route>
        <Route path="/mammalprofile_full">
          <MammalProfile_Full />
        </Route>
        <Route path="/mammalprofile">
          <MammalProfile />
        </Route>
        <Route path="/mammalprofilemimi">
          <MammalProfileMimi />
        </Route>
        <Route path="/myseals">
          <MySeals />
        </Route>
        <Route path="/mammalevents">
          <MammalEvents />
        </Route>
        {/* -------------------- */}
        {/* added dynamic route */}
        <Route path="/mammalevents/:id">
          <MyMammalEvents />
        </Route>
        <Route path="/paymentconfirm/:id">
          <PaymentConfirm />
        </Route>
        {/* ------------------- */}
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        <Route path="/postpayment">
          <PostPayment />
        </Route>
        <Route path="/paymentconfirm">
          <PaymentConfirm />
        </Route>
        <Route path="/postevent">
          <PostEvent />
        </Route>
        <Route exact path="/sponsor">
          <Sponsor />
        </Route>
        <Route path="/veterinarians">
          <Veterinarians />
        </Route>
        <Route path="/mammals">
          <Mammals />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/upcomingevents">
          <UpcomingEvents />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/loginerror">
          <LoginError />
        </Route>
        <Route path="/seals/:id">
          <MammalProfile_Full />
        </Route>
        {/* --------------------- */}
        <Route path="/donate/:id">
          <Donate />
        </Route>
        {/* --------------------- */}
        <Route path="/mammalprofile-postlogin">
          <MammalProfile_PostLogin />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
        <Route path="/maps">
          <Maps />
        </Route>
        <Route path="/carousel">
          <Carousel />
        </Route>
      </Switch>
    </Router>
  );
}
