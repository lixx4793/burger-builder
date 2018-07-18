import React from 'react';
import classes from './MenuToggle.css';

const MenuToggle = (props) => (
  <div onClick = {props.clicked} className = {classes.DrawerToggle}>
    <div> </div>
    <div> </div>
    <div> </div>
  </div>

);

export default MenuToggle;
