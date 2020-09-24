import React from 'react';
import './App.css';

const data = [
  { objectID: 1, title: "Google", url: "http://google.ca" },
  { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
];

export default function App() {

  // React is just html . There's no magic here
  const header = <h3>This is a Header</h3>;
  const div = <div>This is stuff inside a div</div>;
  const li = <li>This is a list item</li>;

  const array =
    [
      <li>This is a list item in an array</li>,
      <li>This is a list item in an array</li>
    ];

  // Build an array of <li> elements from some data
  const mappedList = data.map(item =>
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  );

  // In the "return" React will render whatever you give it
  return (
    <div className="App">
      {header}
      {div}
      <ul>
        {li}
        {array}
        {mappedList}
      </ul>
    </div>
  );
}
