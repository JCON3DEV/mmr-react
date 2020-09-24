import React, { useState } from 'react';
import './App.css';

// Initial data
const initialData = [
  { objectID: 1, title: "Google", url: "http://google.ca" },
  { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
];

export default function App() {

  // Keep track of "data" as State. Initialize with some initial Data
  const [data, setData] = useState(initialData);

  // Keep track of " query" 
  const [input, setInput] = useState("react");

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

  return (
    <div className="App">
      <h3>My Search Page</h3>

      <h4>{input}</h4>
      <input type="text" value={input} onChange={onChange} />

      <ul>{hitsList}</ul>
    </div>
  );
}
