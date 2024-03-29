import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleTrimClick = () => {
        let newText = text.trim();
        setText(newText);
        props.showAlert("White space has been trimed ", "success");
    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text has been reversed!", "success");
    }

    const handleCapitalizeClick = () => {
        let newText = text.replace(/\b\w/g, c => c.toUpperCase());
        setText(newText);
        props.showAlert("First letter has been capitalized!", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (

        <>

            <div className="container" >
                <h1 style={{ backgroundcolour: props.mode === 'white' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="ashim my-2"  >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleTrimClick}>Trim White Spaces</button>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleCapitalizeClick}>Capitalize First Word</button>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

            </div>

            <div className="count my-3" style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary:</h1>
                <p>The above text box has: <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters.</p>
                <p>The above text takes <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes to read.   </p>
            </div>






        </>
    )
}
