import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        const newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container my-4" >
                <h2 style={{color: props.mode==="light"?"black":"white"}}>Enter text to analyze</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#57535e", color: props.mode==="light"?"black":"white"}} id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Lower case</button>
                
                <p style={{color: props.mode==="light"?"black":"white"}}>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p style={{color: props.mode==="light"?"black":"white"}}>{0.01*text.split(/\s/).filter((element)=>{return element.length!==0}).length} minutes read</p>
            </div>
        </>
    );
}
