import React from 'react';
import "../styles/App.css"

function MyInput( {className,...props}) {
    return (
        <input className={className} {...props}></input>
    );
}

export default MyInput;