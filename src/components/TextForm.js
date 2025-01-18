import React,{useState} from 'react'
export default function TextForm(props){
    const[text, setText] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to lowercase!","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Textbox cleared","success")
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed all extra spaces!","success")
    }
    return(
        <>
        <div className='container' style={{color : props.mode === `dark`? `white`:`#01265c`}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === `dark`? `grey`:`white`,color : props.mode === `dark`? `white`:`#01265c`}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === `dark`? `white`:`#01265c`}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
        </div>
        </>
    )
}