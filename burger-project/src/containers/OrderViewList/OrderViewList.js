import React, { Component } from 'react';
import SingleOrder from './SingleOrder/SingleOrder';
import axios from '../../axios-order';
import WithErrorHandler from '../../hoc/WithErrorHandler';
class OrderViewList extends Component {
  state = {
    orders: [],
    loading: true
  }

componentDidMount() {
  axios.get('/orders.json').then( res => {
    console.log(res);
    const tempArray = [];
      for(let obj in res.data)
      {
        tempArray.push({
          ...res.data[obj],
          id: obj
        });
      }
      this.setState({loading: false, orders: tempArray});
  }).catch(err => {
    this.setState({loading: false});
  });

}

  render() {
    return (
      <div>
        {this.state.orders.map(order=> (
          <SingleOrder ingredient = {order.ingredient}
           key = {order.id}
           price = {order.price}
           buyer = {order.orderData.name}
           />)
        )}
      </div>
    );
  }
}

export default WithErrorHandler(OrderViewList, axios);
