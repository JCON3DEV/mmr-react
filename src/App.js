import React, { useState, useEffect } from 'react';
import axios from "axios";
import Input from "./Input.js";
import Homepage from "./components/homepage"; 
import './App.css';

// Christy's Components
import PersistentDrawerRight from "./components/nav-drawer";

//import Roboto Font
import 'fontsource-roboto';

export default function App() {
  const title = "My Search Page";
  const BASEURL = '/api/users/';
  // above is example for test obj purposes
  //https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ alfonso: [] });
  let [count, setCount] = useState(0);
  let [oddCount, setOddCount] = useState(0);
  const [url, setUrl] = useState();


  console.log("This is data; .......", data);
  let login = false
  if (data.alfonso.length > 0){
    login = true;
  }
  // Fetch data whenever url changes
  useEffect(() => {
    axios(count).then((result) => setData(result.data));
  }, [count]);

  // Build array of 'alfonso'
  const alfonsoList = data.alfonso.map((item) => (
    <ul key={item.mammal_id}>
      <a href={item.url}>{item.title}</a>
      <li>{item.mammal_name}</li>
      <li>{item.bio}</li>
      <li>{item.profile_pic}</li>
    </ul>
  ));
  // const alfonsoList = data.alfonso.map(item => (
  //   <li key={item.objectID}>
  //     <a href={item.url}>{item.title}</a>
  //   </li>
  // ));

  const countClick = () => {
    if(count % 2 !== 0){
      setCount(count += 1)
    } else {
      setOddCount(count += 1)
    }
    // setUrl(BASEURL);
    // below was original
    // setUrl(BASEURL + query);
  };

  return (
    // <Container maxWidth="sm">
    <div className="App">
      {<PersistentDrawerRight />}
      <h3>{title}</h3>
      <h4>{url}</h4>
      {/* Use our new Text & Button Component */}

      {login && <Homepage />}
      {/* Above button added for testing purposes */}
      <Input buttonText="Search" initial="React" onClick={countClick} />
      <p>You clicked {count} times</p>
      <ul>{alfonsoList}</ul>

    </div>
    //{" "}
  );



}
