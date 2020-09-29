import React, { useState, useEffect } from 'react';
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
// import Input from "./Input.js";
// import Homepage from "./components/homepage";

// Global Styles
import 'fontsource-roboto';   //Roboto font family

export default function App() {

  return (
    <div className="App">
      {/* <Nav /> */}
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
    //{" "} 
  );

  // const title = "My Search Page";
  // const BASEURL = '/api/users/';
  // // above is example for test obj purposes
  // //https://hn.algolia.com/api/v1/search?query=';

  // // Application State
  // const [data, setData] = useState({ alfonso: [] });
  // let [count, setCount] = useState(0);
  // let [oddCount, setOddCount] = useState(0);
  // const [login, setLogin] = useState(false);
  // const [url, setUrl] = useState();


  // // Fetch data whenever url changes
  // useEffect(() => {
  //   axios.get("/api/users/").then((result) => setData(result.data));
  // }, []);
  // // Build array of 'alfonso'
  // const alfonsoList = data.alfonso.map((item) => {
  //   return (
  //     <ul key={item.mammal_id}>
  //       <a href={item.url}>{item.title}</a>
  //       <li>{item.mammal_name}</li>
  //       <li>{item.bio}</li>
  //       <li>{item.profile_pic}</li>
  //     </ul>
  //   )
  //   });
  // const alfonsoList = data.alfonso.map(item => (
  //   <li key={item.objectID}>
  //     <a href={item.url}>{item.title}</a>
  //   </li>
  // ));

  // const countClick = () => {
  //   if(oddCount % 2 === 0){
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }  
  //   console.log("This is LOGIN ",login);
  //   setOddCount(oddCount += 1)
  //   // setUrl(BASEURL);
  //   // below was original
  //   // setUrl(BASEURL + query);
  // };


  // return (
  //   // <Container maxWidth="sm">
  //   <div className="App">
  //     <PersistentDrawerRight />
  //     <h3>{title}</h3>
  //     <h4>{url}</h4>
  //     {/* Use our new Text & Button Component */}

  //     {login && <Homepage />}
  //     {/* <Homepage /> */}
  //     <Input buttonText="Search" initial="React" onClick={countClick} />
  //     <p>You clicked {oddCount} times</p>
  //     <ul>{alfonsoList}</ul>

  //     <MissionStatement />
  //     <YouTube />
      
  //   </div>
  //   //{" "}
  // );


}
