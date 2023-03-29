import React, {useState} from 'react'
export default function TextForm(props) {

  const handleUpClick=()=>{
      //console.log("uppercase was clicked" + text);
      let newText=text.toUpperCase();
      setText(newText)
   
  } 
  const handlecamelcase=()=>{
    var n = text.length;
    var str="";
    for (var i = 0; i < n; i++){
        // check for spaces in the sentence
        if (text[i] === ' '){
            // conversion into upper case
            str+= text[i+1].toUpperCase();
            i++;    
        }
        // If not space, copy character
        else{
            str+= text[i];
        }
    }
    setText(str)
    
} 
  const handleloClick=()=>{
    //console.log("uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
   
  } 
const handlecleartext=()=>{
  //console.log("uppercase was clicked" + text);
  let newText="";
  setText(newText)
 
} 
  const handleOnChange=(event)=>{
   // console.log("on change");
    setText(event.target.value);
  }
  const[text,setText]=useState('enter text here');

      // Declare a new state variable, which we'll call "count"
      //text="new text";           ->  wrong way to set text
      //setText("new text");       ->  correct way to set text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}  </h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'green':'black'}}></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >convert to uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloClick} >convert to lowercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecleartext} >Clear Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecamelcase} >Camel case</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>
      <p>Average time required to read : {0.008 * text.split(" ").filter((element)=>{return element.length!==0;}).length} minutes </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
} 
