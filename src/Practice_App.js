import React, {useState, useEffect} from "react";
import axios from "axios";
import Input from "./Input.js";
import Homepage from "./components/homepage";
import AboutUs from "./components/about-us";
import YouTube from "./components/youtube";
import "./App.css";

// Christy's Components
// import PersistentDrawerRight from "./components/nav-drawer";

//import Roboto Font
import "fontsource-roboto";

export default function App() {
  const title = "My Search Page";
  const BASEURL = "/api/users/";
  // above is example for test obj purposes
  //https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({alfonso: []});
  let [count, setCount] = useState(0);
  let [oddCount, setOddCount] = useState(0);
  const [login, setLogin] = useState(false);
  const [url, setUrl] = useState();

  // Fetch data whenever url changes
  useEffect(() => {
    axios.get("/api/users/").then((result) => setData(result.data));
  }, []);
  // Build array of 'alfonso'
  const alfonsoList = data.alfonso.map((item) => {
    return (
      <ul key={item.mammal_id}>
        <a href={item.url}>{item.title}</a>
        <li>{item.mammal_name}</li>
        <li>{item.bio}</li>
        <li>{item.profile_pic}</li>
      </ul>
    );
  });
  // const alfonsoList = data.alfonso.map(item => (
  //   <li key={item.objectID}>
  //     <a href={item.url}>{item.title}</a>
  //   </li>
  // ));

  const countClick = () => {
    if (oddCount % 2 === 0) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    console.log("This is LOGIN ", login);
    setOddCount((oddCount += 1));
    // setUrl(BASEURL);
    // below was original
    // setUrl(BASEURL + query);
  };

  return (
    // <Container maxWidth="sm">
    <div className="App">
      {/* {<PersistentDrawerRight />} */}
      <h3>{title}</h3>
      <h4>{url}</h4>
      {/* Use our new Text & Button Component */}

      {login && <Homepage />}
      {/* <Homepage /> */}
      <Input buttonText="Search" initial="React" onClick={countClick} />
      <p>You clicked {oddCount} times</p>
      <ul>{alfonsoList}</ul>

      {/* {login && <AboutUs />} */}
      {/* <AboutUs /> */}
      {/* <YouTube /> */}
    </div>
    //{" "}
  );
}
