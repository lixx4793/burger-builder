import * as actionTypes from './action';

const initalState = {
  ingredient: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4,
}

const IngredientPrice = {
  salad: 0.5,
  meat: 2,
  cheese:1,
  bacon: 1.5
}

const reducer = (state = initalState, action) => {
  switch(action.type)
  {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientType]: state.ingredient[action.ingredientType] + 1
        },
        totalPrice: state.totalPrice + IngredientPrice[action.ingredientType]
      }
    case actionTypes.REMOVE_INGREDIENT:
          let updatednum = state.ingredient[action.ingredientType] -1;
          let updatedPrice = state.totalPrice - IngredientPrice[action.ingredientType];
          if(updatednum < 0)
          {
            updatednum = 0;
            updatedPrice += IngredientPrice[action.ingredientType];
          }
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientType]: updatednum
        },
        totalPrice: updatedPrice
      }
    default:
      return state;
  }

}

export default reducer;
