import React, { useState } from "react";



export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newtext = text.toUpperCase();

    setText(newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();

    setText(newtext);
  };
  const clearText = () => {
    let newtext = "";

    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read approximately</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
