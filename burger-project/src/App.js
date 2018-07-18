import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuiler/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import OrderViewList from './containers/OrderViewList/OrderViewList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path = "/Checkout" component={CheckOut} />
            <Route path = "/viewOrder" component={OrderViewList} />
            <Route path = "/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
