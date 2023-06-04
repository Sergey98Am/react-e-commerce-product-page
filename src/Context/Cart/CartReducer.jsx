//Import the Action types
import {
  REMOVE_ITEM,
  ADD_TO_CART,
} from "./CartTypes.js";

// Save the cartItems to local storage
const Storage = (cartItems) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

// Export function to calculate the total quantity of the cart
export const sumItems = (cartItems) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return { itemCount };
  };

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART:
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;