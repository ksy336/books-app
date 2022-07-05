import React from 'react';
import './Button.css';
const Button = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || 'button'}
      className={`button ${props.disabled && 'disabled'}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
