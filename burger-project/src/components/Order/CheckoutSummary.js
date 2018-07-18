import React from 'react';
import Button from '../UI/Button/Button';
import Burger from '../Burger/Burger';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div className = {classes.CheckoutSummary}>
      <h1> Wish you love your burger ( You made it dont blame it) </h1>
      <div style={{width: '100%', height: '300px', margin: 'auto'}}>
        <Burger ingredient = {props.ingredient} />
      </div>
      <div style={{
        marginTop: '15vh'
      }}>
      <Button type = "Success" clicked = {props.checkoutHandler}>
        Continue
      </Button>
      <Button type ="Danger" clicked = {props.cancleHandler}>
        Close
      </Button>
      </div>
    </div>
  );

}

export default CheckoutSummary;
