import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Home(props) {
    const [placeholder, setPlaceholder] = useState("Enter text here")

    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }

    const handlePascalCase = () => {
        let words = text.split(' ')
        let newText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText)
    }
    const handleCopy = () => {
        const textarea = document.getElementById('myTextarea');
        textarea.value = text;
        textarea.select();
        document.execCommand('copy');
        alert('Text copied to clipboard');
    }



    const generateRandomText = () => {
        var length = prompt("How many text you want to generate.")
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz               ";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        setText(text)
    }

    return (
        <div className="container" style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
            <div style={{ borderRadius: "35px", padding: "10px 40px" }} className={`container bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea id="myTextarea" className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} rows="3" onChange={handleOnChange} value={text} placeholder={placeholder} ></textarea>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={handleUpperCase} >Uppercase</button>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={handleLowerCase} >Lowercase</button>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={handlePascalCase} >Pascalcase</button>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopy} >Copy</button>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={generateRandomText} >GenerateText</button>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = { heading: PropTypes.string }
Home.defaultProps = { heading: "Enter your sentaces" }