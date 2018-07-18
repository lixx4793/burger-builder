import React from 'react';
import LogoImg from '../../assets/img/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className = {classes.outlayer} style = {{height: props.height}}>
      <div className = {classes.Logo} >
        <img src = {LogoImg} alt = "Burger" />
      </div>
    </div>
);

export default Logo;
