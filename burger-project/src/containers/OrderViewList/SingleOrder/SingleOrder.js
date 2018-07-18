import React from 'react';
import classes from './SingleOrder.css';

const SingleOrder = (props) => {
const ingArray = [];
for (let ing in props.ingredient)
{
  ingArray.push(
    {name: ing, amount: props.ingredient[ing]}
  );
}

let ingOutput = ingArray.map(ig => {
  return <span style={
    { textTransform: 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #ccc',
      padding: '5px'}}
    key = {ig.name}> {ig.name} ({ig.amount}) </span>
})
return (
  <div className={classes.Order}>
    <p> ingredient:  {ingOutput} </p>
    <p> Price: <strong> {props.price} </strong>  </p>
    <p> Order From: <strong> {props.buyer} </strong> </p>

  </div>

);
}

export default SingleOrder;
