import React from 'react';
import axios from "axios";
import './App.css';

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
// React functions to import array of objects from DB
import Sponsor from "./components/sponsors";
import Veterinarians from "./components/veterinarians";
import Mammals from "./components/mammals";

//Additional Test Components
import MissionStatement from "./components/MissionStatement"; //text component, about page
import YouTube from "./components/youtube"; // working using react-youtube package

// Global Styles
import 'fontsource-roboto';   //Roboto font family
import 'semantic-ui-css/semantic.min.css' //semantic UI package

export default function App() {

  return (
    <div className="App">
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
      <YouTube />
      <Sponsor />
      <Veterinarians />
      <Mammals />
    </div>
  );
}
