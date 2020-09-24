import React, { useState } from "react";

// export default function Input(props) {
export default function Input({ buttonText, onClick, initial }) {

  // Several ways we can reference props
  // const {onClick, initial} = props;

  // Just need one state 
  const [text, setText] = useState(initial);

  // Convenience onChange function
  const onChange = function (event) {
    setText(event.target.value);
  };

  return (
    < div className="Input" >
      <input type="text" value={text} onChange={onChange} />

      <button type="button" onClick={() => onClick(text)}>
        {/* onClick={() => props.onClick(text)}> */}
        {buttonText}
      </button>

    </div>
  );
}
