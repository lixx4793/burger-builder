import React from 'react';
import classes from './Button.css';

const Button = (props) => (

  //  .join('seprator')  join an array to a string
    <button className = {[classes.Button, classes[props.type]].join(' ')}
      onClick = {props.clicked}> {props.children} </button>
);

export default Button;
