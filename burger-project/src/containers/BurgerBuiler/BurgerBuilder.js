import React, {Component} from 'react';
import HocWrapper from '../../hoc/HocWrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler';


const IngredientPrice = {
  salad: 0.5,
  meat: 2,
  cheese:1,
  bacon: 1.5
}


class BurgerBuilder extends Component {
state = {
  ingredient: null,
  totalPrice: 4,
  purcaseable: false,
  paying: false,
  spinner: false
}

  componentDidMount() {
    console.log(this.props);
    axios.get('https://react-my-burger-7c5ee.firebaseio.com/ingredient.json').then(response => {
      this.setState({ingredient: response.data})
    }).catch(error => {
      console.log(error);
    });
  }

 addIngredient = (type) => {
  let updateIngredients = this.state.ingredient[type] + 1;
  let newIngredients = {...this.state.ingredient};
  newIngredients[type] = updateIngredients;
  this.updatePurState(newIngredients);
  let newPrice = this.state.totalPrice + IngredientPrice[type];
  this.setState({totalPrice: newPrice, ingredient: newIngredients});
}

removeIngredient = (type) => {
  let newIngredientsNum = this.state.ingredient[type];
  if(newIngredientsNum === 0)return;
  newIngredientsNum -= 1;
  let newIngredients = {...this.state.ingredient};
  newIngredients[type] = newIngredientsNum;
  let newPrice = this.state.totalPrice -IngredientPrice[type];
  this.setState({totalPrice: newPrice, ingredient: newIngredients});
  this.updatePurState(newIngredients);
}

updatePurState = (newIngredients) => {
  let cpy = {...newIngredients};
  let sum = Object.keys(cpy).map(keyname => {
    return cpy[keyname];
  }).reduce((acc, ele) => {
    return acc + ele;
  },0);
  this.setState({purcaseable: sum > 0});
}

pruchaseHandler = () => {
  this.setState({paying: true});
}

cancleHandler = () => {
  this.setState({paying: false});
}


//  This handler will handle the event when user clicked on continue button after order button
continueHandler = () => {
    let queryArray = [];
    for(let ele in this.state.ingredient)
    {
      queryArray.push(encodeURIComponent(ele) + "=" + encodeURIComponent(this.state.ingredient[ele]));
    }
      queryArray.push("price="+this.state.totalPrice);
      queryArray = queryArray.join("&");
    this.props.history.push({
      pathname: "/Checkout",
      search: "?" + queryArray
    });
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
      if(this.state.ingredient)
      {
        burger = (
          <HocWrapper>
            <Burger ingredient = {this.state.ingredient}/>
            <div style = {style}> ${(this.state.totalPrice).toFixed(2)} </div>

            <BuildControls
              addHandler = {this.addIngredient}
              removeHandle = {this.removeIngredient}
              stateHandle = {this.state.purcaseable}
              activePurchase = {this.pruchaseHandler}
            />
          </HocWrapper>
        )

        orderSummary = (
          <OrderSummary ingredient = {this.state.ingredient}
        price = {this.state.totalPrice}
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


export default WithErrorHandler(BurgerBuilder, axios);
