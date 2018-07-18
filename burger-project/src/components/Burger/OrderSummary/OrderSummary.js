import React, {Component} from 'react';
import HocWrapper from '../../../hoc/HocWrapper';
import Button from '../../UI/Button/Button';


//  This should be a stateless component, change to class only for debug purpose
class orderSummary extends Component {
  // Improve performence of application
  componentWillUpdate() {
    // The function will be updated everytime a button is clicked,
    // in order to enhance the performence, check the props change
    console.log('Rerendering the orderSummary!');
  }





  render() {

    let contents = Object.keys(this.props.ingredient).map( igKey => {
    return (
      <li key = {igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredient[igKey]}
      </li>
    );
    });
    return (
      <HocWrapper>
        <h3> Your order Summary: </h3>
        <p> Your order contain following contents </p>
        <ul>
          {contents}
        </ul>
        <p> <strong> Total Price is: {(this.props.price).toFixed(2)} </strong> </p>
        <p> Continue to Check out? </p>
        <Button type = "Success" clicked = {this.props.continueClicked}> Continue </Button>
        <Button type = "Danger" clicked = {this.props.closeClicked}> Close </Button>
      </HocWrapper>
    );
  }

}

export default orderSummary;
