import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
//  Objec5.keys turn a javaScript Object to array of object key  (array of KEY !!!)
//  Array(a, b)  create an array of element b with length a
//  Array.map(ele, fun) operate function to each ele in the array


// let tryout =  Object.keys(props.ingredient);
//

  let stuff = Object.keys(props.ingredient).map( typeKey => {
    return [...Array(props.ingredient[typeKey])].map( (_, i) => {
      return <BurgerIngredient type = {typeKey} key = {typeKey + i} />
    });
  }).reduce((acc, ele) => {
    return acc.concat(ele);
  }, []);

  if(stuff.length === 0) {
    stuff = <h2>Lets Build Your Burger</h2>;
  }

  return (
    <div className = {classes.Burger}>
      <BurgerIngredient type = 'bread-top'/>
      {stuff}
      <BurgerIngredient type = 'bread-bottom'/>
    </div>
  );
}

export default withRouter(Burger);
