import React, {useState} from "react";

export default function Forms(props) {
  const handleUpClick = ()=>{
    let NewText = text.toUpperCase();
    setText(NewText);
  }
  const handleOnClick = (event)=>{
    setText(event.target.value);
  }
  const handleClearClick = (event)=>{
    let LowText = text.toLocaleLowerCase();
    setText(LowText);
  }
  const handleCopy=(event)=>{
    var copy= document.getElementById("myBox");
    copy.select();
    copy.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copy.value);
  }
  const[text,setText]= useState("");
  return (
    <>
   
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="from-lable"></label>
        <textarea
          className="form-control"
          style={{background: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}}
          value={text}
          onChange={handleOnClick}
          id="myBox"
          rows="5"          
        ></textarea>
      </div>
      <button type="button" className="btn btn-outline-primary my-3" onClick={handleUpClick}>UPPER CASE</button>
      <button type="button" className="btn btn-outline-warning mx-2"onClick={handleClearClick}>lower case</button>
      <button type="button" className="btn btn-outline-info"onClick={handleCopy}>Copy Text</button>

      <div className ="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <p>Preview</p>
        <p>{text}</p>

      </div>

    </>
  );
}
