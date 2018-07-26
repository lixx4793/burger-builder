import React, { Component } from 'react';
import { Route, withRoute } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class CheckOut extends Component {



checkoutHandler = () => {
  this.props.history.push(this.props.match.path + "/contactData");
}

cancleHandler = () => {
  this.props.history.goBack();
}

//  () {} is function take no paramaters, since need to receive this.props need to use arrow function
  render() {
    return (
      <div>
        <CheckoutSummary ingredient={this.props.ings}
          checkoutHandler = {this.checkoutHandler}
          cancleHandler = {this.cancleHandler}
        />

        <Route path={this.props.match.path + "/contactData"} component = {ContactData} />
      </div>
    );
  }

}

const stateToProps = state => {
  return {
    ings: state.ingredient
  }
}



export default connect(stateToProps)(CheckOut);
