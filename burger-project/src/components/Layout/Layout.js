import React, {Component} from 'react';
import HocWrapper from '../../hoc/HocWrapper';
import classes from './Layout.css';
import Toolbar from '../Navigation/ToolBar/Toolbar';
import SlideDrawer from '../SlideDrawer/SlideDrawer';

class Layout extends Component {

state = {
  showSlide: false
}

  cancleHandler = () => {
    this.setState({showSlide: false});
  }

  openSlideHandler = () => {
    this.setState( {showSlide: true});
  }


  render() {
    return (
      <HocWrapper>
        <SlideDrawer showSlide = {this.state.showSlide} clicked = {this.cancleHandler} />
        <Toolbar menuClicked = {this.openSlideHandler}/>
        <main className = {classes.Content}>
          {this.props.children}
        </main>
      </HocWrapper>
    );
  }
}
export default Layout ;
