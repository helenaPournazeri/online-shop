/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helpers/helper";

const initialState = {
  selectedItems : [],
  totalQuantity: 0,
  totalPrice : 0,
  checkout: false
};

const reducer = (state, action)=>{

    switch (action.type) {
      case "ADD_ITEM":
        if (!state.selectedItems.find(item=> item.id === action.payload.id)) {
          state.selectedItems.push({...action.payload, quantity: 1});
        }
        return {
          ...state,
          ...sumProducts(state.selectedItems),
          checkout: false
        };
      case "REMOVE_ITEM" : 
        const newSelected = state.selectedItems.filter((item => item.id !== action.payload.id));
        return {
          ...state,
          selectedItems : [...newSelected],
          ...sumProducts(newSelected),
          checkout: false
        };
      case "INCREASE" :
        const increaseIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id);
        state.selectedItems[increaseIndex].quantity++;
        return{
          ...state,
          ...sumProducts(state.selectedItems)
        };
      case "DECREASE" :
        const decreaseIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id);
        state.selectedItems[decreaseIndex].quantity--;
        return{
          ...state,
          ...sumProducts(state.selectedItems),
        };
      case "CHECKOUT" :
        return{
          selectedItems: [],
          totalPrice: 0,
          totalQuantity : 0,
          checkout: true,
        }
      default: 
        throw new Error("invalid action");
    }
  };

const CartContext = createContext()


function CartProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{state, dispatch}} >{children}</CartContext.Provider>
  )
}

const useCart = ()=>{
    const {state, dispatch} = useContext(CartContext)
    return [state, dispatch]
}

export default CartProvider;
export {useCart}