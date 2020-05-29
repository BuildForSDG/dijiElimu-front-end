import React from 'react';
import  './button.scss'

const Button = ({label, handleClick, inverted, isGoogleSignIn, ...otherProps}) => {
    return (
        <button onClick={handleClick} {...otherProps} className={`btn inverted ${isGoogleSignIn?`is-google-sign-in`:''} ${inverted?'inverted':''}` }>{label} </button>
    );
}

export default Button;
