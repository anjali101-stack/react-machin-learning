import React, { useEffect } from 'react';
import { useCart } from './Context/CartContext';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Cart = () => {
  const {cartItems , RemoveFromcart}= useCart();

  console.log(cartItems)

  useEffect(()=>{
console.log(cartItems)
  }, [cartItems])
  return (
    <>
<Navbar/>
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <p>No items in cart.</p> : (
        cartItems.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => RemoveFromcart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default Cart;
