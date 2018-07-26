import React, {Component} from 'react';
import { connect } from 'react-redux';
import HocWrapper from '../../hoc/HocWrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler';
import * as actionTypes from "../../store/action";






class BurgerBuilder extends Component {
state = {
  paying: false,
  spinner: false
}

  componentDidMount() {
    console.log(this.props);
    // axios.get('https://react-my-burger-7c5ee.firebaseio.com/ingredient.json').then(response => {
    //   this.setState({ingredient: response.data})
    // }).catch(error => {
    //   console.log(error);
    // });
  }


updatePurState = (newIngredients) => {
  console.log(' calling state update' );
  let cpy = {...newIngredients};
  let sum = Object.keys(cpy).map(keyname => {
    return cpy[keyname];
  }).reduce((acc, ele) => {
    return acc + ele;
  },0);
  return sum > 0;
}

pruchaseHandler = () => {
  this.setState({paying: true});
}

cancleHandler = () => {
  this.setState({paying: false});
}


//  This handler will handle the event when user clicked on continue button after order button
continueHandler = () => {
    this.props.history.push("/Checkout");
    this.setState({spinner: false});
}

  render() {
    const style = {
      textAlign: 'center',
      margin: 'auto',
      marginTop: '20px',
      color: 'gold',
      fontStyle: 'bold',
      fontSize: '2em',
      backgroundColor: 'black',
      width: '70%'
    }

      let orderSummary = null;

      let burger = <Spinner />;
      if(this.props.ingredient)
      {
        burger = (
          <HocWrapper>
            <Burger ingredient = {this.props.ingredient}/>
            <div style = {style}> ${(this.props.price).toFixed(2)} </div>

            <BuildControls
              addHandler = {this.props.onAddHandler}
              removeHandle = {this.props.onRemveHandler}
              stateHandle = {this.updatePurState(this.props.ingredient)}
              activePurchase = {this.pruchaseHandler}
            />
          </HocWrapper>
        )

        orderSummary = (
          <OrderSummary ingredient = {this.props.ingredient}
        price = {this.props.price}
        closeClicked = {this.cancleHandler}
        continueClicked = {this.continueHandler}/>
        )
      }
      if(this.state.spinner) {
        orderSummary = <Spinner />;
      }


    return (
        <HocWrapper>
          <Modal show = {this.state.paying} canclePurchase = {this.cancleHandler}>
            {orderSummary}
          </Modal>
          {burger}
        </HocWrapper>
    );
  }
}

const stateToProps = state => {
  return {
  ingredient: state.ingredient,
  price: state.totalPrice
  }
}

const dispatchToProps = dispatch => {
  return {
    onAddHandler: (ingType) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientType: ingType}),
    onRemveHandler: (ingType) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientType: ingType})
  }
}


export default connect(stateToProps, dispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
