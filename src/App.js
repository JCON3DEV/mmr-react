import React, { useState, useEffect } from 'react';
import axios from "axios";
import Input from "./Input.js";
import {Button, Typography} from "@material-ui/core";
// import Box from "@material-ui/core/Box";
import BasicTable from "./components/table";
import BottomNav from "./components/bottom-navigation";
import './App.css';

export default function App() {
  const title = "My Search Page";
  const BASEURL = '/api/users/';
  // above is example for test obj purposes
  //https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState();

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
      <Button variant="outlined" color="secondary">
        Hello World
      </Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      {/* Above button added for testing purposes */}
      <Input buttonText="Search" initial="React" onClick={searchClick} />
      {/* <Box m={1}> */}
      <BasicTable />
      {/* <Box /> */}
      <BottomNav />
      <ul>{hitsList}</ul>
    </div>
    //{" "}
  );
}
