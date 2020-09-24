import React, { Fragment, useState } from "react";

export default function Input({ buttonText, onClick, initial }) {
  // Note the destructuring again
  // Same as this: 
  // function Search(props) {
  // const {onClick, initial} = props;

  // Just need one state 
  const [query, setQuery] = useState(initial);

  // Convenience onChange function
  const onChange = function (event) {
    setQuery(event.target.value);
  };

  return (
    < div className="Input" >
      <input type="text" value={query} onChange={onChange} />

      <button type="button" onClick={() => onClick(query)}>
        {/* instead of: onClick={() => props.onClick(query)}> */}
        {buttonText}
      </button>

    </div>
  );
}
