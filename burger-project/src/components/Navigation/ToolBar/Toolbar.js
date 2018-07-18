import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import MenuToggle from '../../SlideDrawer/MenuToggle/MenuToggle';

const Toolbar = (props) => (
  <header className = {classes.Toolbar}>
    <MenuToggle clicked = {props.menuClicked} />
    <Logo height = "80%"/>
    <div className = {classes.conditional}>
      <NavigationItems />
    </div>
  </header>
);

export default Toolbar;
