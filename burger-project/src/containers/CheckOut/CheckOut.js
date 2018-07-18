import React, { Component } from 'react';
import { Route, withRoute } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class CheckOut extends Component {
  state = {
    ingredient: null,
    totalPrice: 0
  }
  componentWillMount() {
    const querySearch  = new URLSearchParams(this.props.location.search);
    const ingre = {};
    let price = 0;
    for (let pair of querySearch.entries())
    {
      // query.entries() = ['cheese', 2] ...
      // add + in front of string make it to int
      if(pair[0] === "price")
      {
        price = +pair[1];
      }
      else
      {
        ingre[pair[0]] = +pair[1];
      }

    }
    this.setState({ingredient: ingre, totalPrice: price});

  }

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
        <CheckoutSummary ingredient={this.state.ingredient}
          checkoutHandler = {this.checkoutHandler}
          cancleHandler = {this.cancleHandler}
        />
        <Route path={this.props.match.path + "/contactData"}
          render={() => (<ContactData ingredient = {this.state.ingredient} price={this.state.totalPrice}/>)} />
      </div>
    );
  }

}

export default CheckOut;
