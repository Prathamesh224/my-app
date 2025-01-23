// src/pages/Cart.js

import React from 'react';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
 // Optional: Add styles specific to this page

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 50, quantity: 2 },
    // Add more cart items here
  ];

  const calculateTotal = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
};

export default Cart;
