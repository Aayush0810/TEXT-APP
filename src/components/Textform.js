import React, { useState } from "react";

export default function Textform(props) {

  //LOGICS OF TEXT EDITORS

  const handleUpClick = () => {
    // console.log("uppercase button was hit" + text)
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Uppercase", "success")
  };
  const handleLoClick = () => {
    // console.log("uppercase button was hit" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lowercase", "success")

  };
  const copy = () => {
    // let copytext = text;
    // navigator.clipboard.writeText(copytext).then(() => {
    //   // alert("Copied to clipboard");
    //   let ClearBtn = document.getElementById("cleatBtn")
// });
   var text = document.getElementById("myBox")
   text.select()
   text.setSelectionRange(0,9999)
   navigator.clipboard.writeText(text.value) 
   props.showAlert("Text has been copied to clipboard", "success")

  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is being spoken", "success")

  };
  const clearText = () => {
    let newText = text;
    newText = "";
    setText(newText);
   props.showAlert("Text has been erased", "success")

  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  //DEFINING THE USESTATE
  const [text, setText] = useState("");
  //setText("new Text"); correct way to change the state
  return (
    //HTML FOR THE PAGE
    <>
      <div className="container" style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
        <h2 className="my-3" >{props.heading}</h2>
        <div className="mb-3 mt-4">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode==='dark'?'white':'#F8F9FA'  
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter the text here"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={speak}>
          Speak
        </button>
        <button className="copyBtn btn btn-secondary mx-1" onClick={copy}>
          Copy to clipboard
        </button>
        <button className="btn btn-secondary mx-1" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container my-3">  
      {/* CONVERTING THE TEXT COLOR USING JS */}

        <h2 style={{
              color: props.mode==='dark'?'white':'black'  
            }}>Text Summery</h2>
        <p style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
          {/* TOTAL NUMBER OF WORDS AND CHARACTER WRITTEN     */}
          {text.split(" ").length} words and {text.length} characters
        </p>

        {/* //textsplit will convert the text written into array. */}
        <p style={{
              color: props.mode==='dark'?'white':'black'  
            }}>{0.008 * text.split(" ").length} Approx minutes to read</p>

            {/* PREVIEW OF THE TEXT */}
        <h2 style={{
              color: props.mode==='dark'?'white':'black'  
            }}>Preview</h2>
        <p style={{ color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something in the textbox to preview here..."}</p>
      </div>
    </>
  );
}
//hooks- without making a class you can use the features of class
