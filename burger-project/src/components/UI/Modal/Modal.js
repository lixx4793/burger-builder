import React, {Component} from 'react';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
import HocWrapper from '../../../hoc/HocWrapper';

class Modal extends Component {

  // Check if the model and the order summary {props.children} need to be re-render by
  // checking the change of show value
  // Can not change the sequence of parameters, always pass the nextProps first
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log("[MOdel] is re-rendering" );
  }

  render() {
    return (
      <HocWrapper>
        <BackDrop show = {this.props.show} clicked = {this.props.canclePurchase} />
        <div className = {classes.Modal}
          style = {{
            transform: this.props.show ? ' translateY(0) scale(1)' : 'translateY(-100em) scale(0.4)',
            opacity:this.props.show ? '1': '0'
          }}>
          {this.props.children}
        </div>
      </HocWrapper>
    );
  }

}

export default Modal;
