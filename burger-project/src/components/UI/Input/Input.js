import React from 'react';
import classes from './Input.css';


const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className = {classes.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
      break;
    case ('textarea'):
      inputElement = <textarea
        className = {classes.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
      break;
    case ('select'):
      inputElement = <select className = {classes.InputElement} value={props.value} onChange={props.changed}>
        {
          props.elementConfig.options.map(opt => (
          <option value = {opt.value} key={opt.value}>
            {opt.displayValue}
          </option>
        ))
        }
        </select>



      break;

    default:
      inputElement = <input className = {classes.InputElement}
      placeholder = {props.elementConfig.placeholder } />
  }

    return (
      <div className = {classes.Input}>
        <lable className = {classes.Lable}>
          {inputElement}
        </lable>
      </div>
    );
}

export default Input;
