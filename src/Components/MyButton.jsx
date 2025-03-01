import React from 'react';
import "../styles/App.css"

const MyButton = ({className, children, ...props}) => {
    return (
        <button
            className={className} {...props}>
            {children}
        </button>
    );
};

export default MyButton;