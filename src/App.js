import React, { useState } from 'react';
import './App.css';

// Some Initial data
const initialData = [
  { objectID: 1, title: "Google", url: "http://google.ca" },
  { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
];

export default function App() {

  // Keep track of "data" as State. Initialize with some initial Data
  const [data, setData] = useState(initialData);
  // Note the Javascript Destructuring.  Same result as this:
  // const myState = useState(initialData);
  // const data = myState[0];     // state item
  // const setData = myState[1]; // updating function (setter)

  // Build array of <li> elements from  data
  const hitsList = data.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  return (
    <div className="App">
      <h3>My Search Page</h3>
      <ul>{hitsList}</ul>
    </div>
  );
}


