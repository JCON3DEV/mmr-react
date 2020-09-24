import React, { useState } from 'react';
import './App.css';

// Temporary initial data
const initialData = [
  { objectID: 1, title: "Google", url: "http://google.ca" },
  { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
];

function App() {
  const title = "My Search Page";
  const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';


  // Application State
  const [data, setData] = useState(initialData);
  const [input, setInput] = useState("");
  const [url, setUrl] = useState();

  // Build (array) of <li> elements from  data.hits
  const hitsList = data.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  // Convenience onChange function
  const onChange = function (event) {
    setInput(event.target.value);
  };

  const buttonClick = function () {
    setUrl(BASEURL + input);
  };

  return (
    <div className="App">
      <h3>{title}</h3>

      <h4>{input}</h4>
      <input type="text" value={input} onChange={onChange} />

      <button type="button" onClick={buttonClick}> Search</button>
      <h4>{url}</h4>
      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
