import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';
import classes from './BuildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className = {classes.BrugerControler}>
    {controls.map(ele => (
      <BuildControl label={ele.label}
        key = {ele.label}
        Add = { () => props.addHandler(ele.type)}
        Remove = { () => props.removeHandle(ele.type)}

      />
    ))}
    <button className = {classes.OrderButton}
    disabled={!props.stateHandle}
    onClick = { () => props.activePurchase()}> ORDER NOW </button>

  </div>

);

export default buildControls;
