import React, {useState} from 'react';

export default function TextForm(props) {
  const HandleUpclick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const HandleLoclick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const Handleclearclick = () =>{
    let newText = "";
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  //text = "new text"; //Wrong way to change text
  //setText{"new text"}; //corrct way to change the text
  return (
    <>
    <div className='container' style={{color:props.mode=='dark'?'white':'#274077'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onClick={handleOnChange} style={{backgroundColor: props.mode=='dark'?'grey':'white',color:props.mode=='dark'?'white':'#274077'}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2 my-1' onClick={HandleUpclick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2 my-1' onClick={HandleLoclick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2 my-1' onClick={Handleclearclick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode=='dark'?'white':'#274077'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}

