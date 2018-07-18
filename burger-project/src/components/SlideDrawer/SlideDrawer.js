import React from 'react';
import NavigationItem from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import classes from './SlideDrawer.css';
import HocWrapper from '../../hoc/HocWrapper';
import BackDrop from '../UI/BackDrop/BackDrop';

const SlideDrawer = (props) => {
  let classStyle = [classes.SlideDrawer, classes.Close];
  if(props.showSlide)
  {
    classStyle = [classes.SlideDrawer, classes.Open];
  }

  return (
    <HocWrapper>
      <BackDrop show = {props.showSlide} clicked = {props.clicked}/>
      <div className = {classStyle.join(' ')}>
        <Logo height = "10%"/>
        <nav>
          <NavigationItem />
        </nav>
      </div>
    </HocWrapper>

  );
}

export default SlideDrawer;
