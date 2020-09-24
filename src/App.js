import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ hits: [] });
  const [input, setInput] = useState("");
  const [url, setUrl] = useState();

  // Fetch data whenever url changes
  useEffect(() => {
    axios(url).then(result => setData(result.data));
  }, [url]);

  // Build list of 'hits'
  const hitsList = data.hits.map(item => (
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
      <h3>My Search Page</h3>
      <h4>{input}</h4>

      <input type="text" value={input}
        onChange={onChange} />

      <button
        type="button"
        onClick={buttonClick}>
        Search
			</button>

      <h4>{url}</h4>
      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
