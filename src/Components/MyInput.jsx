import React from 'react';

function MyInput(props) {
    return (
        <input maxLength={30} {...props}></input>
    );
}

export default MyInput;