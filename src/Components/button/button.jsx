import React from 'react';
import  './button.scss'

const Button = ({label, handleClick, isGoogleSignIn, ...otherProps}) => {
    return (
        <button onClick={handleClick} {...otherProps} className={`btn ${isGoogleSignIn?`is-google-sign-in`:''}`}>{label} </button>
    );
}

export default Button;
