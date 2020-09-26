import React, { useState, useEffect } from 'react';
import axios from "axios";
import Input from "./Input.js";
import Homepage from "./components/homepage"; 
import './App.css';

export default function App() {
  const title = "My Search Page";
  const BASEURL = '/api/users/';
  // above is example for test obj purposes
  //https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState();


  console.log("This is data; .......", data);
  let login = false
  if (data.hits.length > 0){
    login = true;
  }
  // Fetch data whenever url changes
  useEffect(() => {
    axios(url).then(result => setData(result.data));
  }, [url]);

  // Build array of 'hits'
  const hitsList = data.hits.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  const searchClick = function (query) {
    setUrl(BASEURL);
    // below was original
    // setUrl(BASEURL + query);
  };

  return (
    // <Container maxWidth="sm">
    <div className="App">
      <h3>{title}</h3>
      <h4>{url}</h4>
      {/* Use our new Text & Button Component */}

      {login && <Homepage />}
      {/* Above button added for testing purposes */}
      <Input buttonText="Search" initial="React" onClick={searchClick} />

      <ul>{hitsList}</ul>
    </div>
    //{" "}
  );
}
