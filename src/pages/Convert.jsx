import React, { useState } from "react";
import { Toast } from "react-bootstrap";

export default function Form(props) {
  const [showToast, setShowToast] = useState(false);

  const copy = () => {
    let text = document.getElementById("mybox");

    if (text.value.trim() === "") {
      return;
    }

    // Create a temporary input element
    let tempInput = document.createElement("input");
    tempInput.value = text.value;
    document.body.appendChild(tempInput);

    // Select the content of the temporary input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // For mobile devices
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    setShowToast(true);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clear = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3 mt-3">
          <textarea
            rows="8"
            className="form-control"
            id="mybox"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center">
          <button
            className="btn btn-primary mb-2 mb-sm-0 mr-2 ml-2"
            onClick={handleUpClick}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-primary mb-2 mb-sm-0 mr-2 ml-2"
            onClick={handleloClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-success mb-2 mb-sm-0 mr-2 ml-2"
            onClick={copy}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-danger mb-2 mb-sm-0 mr-2 ml-2"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h1>Text Summary</h1>
        <h4>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </h4>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="position-fixed bottom-0 start-0 m-3"
        delay={2000}
        autohide
      >
        <Toast.Body className="my-2">
          <strong className="me-auto ml-5">Copied to Clipboard</strong>
        </Toast.Body>
      </Toast>
    </>
  );
}
