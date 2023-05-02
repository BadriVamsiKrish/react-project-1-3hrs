import React from 'react';
import CartContext from './Cart-Context';
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items:[],
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemToCartHandler
  };
  return (
    <CartProvider value={cartContext}>
      {props.children}
    </CartProvider>
  )
}

export default CartProvider;