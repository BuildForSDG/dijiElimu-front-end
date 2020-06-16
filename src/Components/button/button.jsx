import React from 'react';
import  './button.scss'

const Button = ({label, handleClick, inverted, buttonDanger, isGoogleSignIn, ...otherProps}) => {

    return (
        <button 
        onClick={handleClick}
         {...otherProps} 
         className={`btn  ${isGoogleSignIn?`is-google-sign-in`:''}
         ${buttonDanger?'btn-danger':''}
          ${inverted?'inverted':''}` }>{label} </button>
    );
}

export default Button;
