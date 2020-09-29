import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
// import axios from "axios";

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
// import YouTube from "./components/youtube";
import Unsponsored from "./components/unsponsored";

//Additional Test Components
import MissionStatement from "./components/MissionStatement"; //text component, about page

export default function App() {
  console.log("This is loading?");
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/liveevent">
          <LiveEvent />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/donate">
          <Donate />
        </Route>
        <Route path="/fullmammalprofile">
          <FullMammalProfile />
        </Route>
        <Route path="/mammalprofile">
          <MammalProfile />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
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
      </Switch>
    </Router>
  );
}

// export default function App() {
//   console.log("This is loading");
//   return (
//     <Router>
//       <div className="App">
//         <ul>
//           {/* <Nav />
//           <AboutUs />
//           <Checkout />
//           <ContactUs /> */}
//           {/* <Donate />
//           <Home />
//           <LiveEvent />
//           <FullMammalProfile />
//           <MammalProfile />
//           <MySeals />
//           <Notifications />
//           <PaymentConfirm />
//           <PostEvent />

//           <MissionStatement />
//           <YouTube />
//           <Sponsor />
//           <Veterinarians />
//           <Mammals /> */}

//           {/* <li>
//               <Link to="/nav">Nav</Link>
//             </li>
//             <li>
//               <Link to="/aboutus">AboutUs</Link>
//             </li>
//             <li>
//               <Link to="/contactus">ContactUs</Link>
//             </li>
//             <li>
//               <Link to="/donate">Donate</Link>
//             </li>
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/liveevent">LiveEvent</Link>
//             </li>
//             <li>
//               <Link to="/fullmammalprofile">FullMammalProfile</Link>
//             </li>
//             <li>
//               <Link to="/fullmammalprofile">MammalProfile</Link>
//             </li>
//             <li>
//               <Link to="/myseals">MySeals</Link>
//             </li>
//             <li>
//               <Link to="/notifications">Notifications</Link>
//             </li> */}
//         </ul>

//         {/* A <Switch> looks through its children <Route>s and
//               renders the first one that matches the current URL. */}

//        /* <Switch>
//           <Route path="/nav">
//             <Nav />
//           </Route>
//           <Route path="/aboutus">
//             <MissionStatement />
//             <AboutUs />
//           </Route>
//           <Route path="/contactus">
//             <ContactUs />
//           </Route>
//           <Route path="/donate">
//             <Donate />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//           <Route path="/liveeventabc">
//             <LiveEvent />
//           </Route>
//           <Route path="/fullmammalprofile">
//             <FullMammalProfile />
//           </Route>
//           <Route path="/mammalprofile">
//             <MammalProfile />
//           </Route>
//           <Route path="/myseals">
//             <MySeals />
//           </Route>
//           <Route path="/notifications">
//             <Notifications />
//           </Route>
//           <Route path="/paymentconfirm">
//             <PaymentConfirm />
//           </Route>
//           <Route path="/postevent">
//             <PostEvent />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
//   */
// }
