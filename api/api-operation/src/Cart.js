import React, { useEffect } from 'react';
import { useCart } from './Context/CartContext';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TotalPrice from './TotalPrice';

const Cart = () => {
  const { cartItems, RemoveFromcart } = useCart();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <div style={styles.pageWrapper}>
        <div style={styles.left}>
          <h1 style={styles.heading}>🛒 Your Cart</h1>
          {cartItems.length === 0 ? (
            <p style={styles.emptyText}>Your cart is currently empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={styles.card}>
                <img src={item.thumbnail} alt={item.title} style={styles.image} />
                <div style={styles.details}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><strong>Price:</strong> ${item.price}</p>

                  <button style={styles.removeBtn} onClick={() => RemoveFromcart(item)}>
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={styles.right}>
          <TotalPrice />
          {cartItems.length > 0 && (
            <Link to="/checkout" style={styles.checkoutBtn}>
              ✅ Proceed to Checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  pageWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 30,
    gap: 20,
    maxWidth: 1200,
    margin: 'auto',
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 100
  },
  heading: {
    fontSize: 36,
    marginBottom: 30,
    textAlign: 'center',
    color: '#333'
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 18
  },
  card: {
    display: 'flex',
    gap: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  image: {
    width: 120,
    height: 120,
    objectFit: 'cover',
    borderRadius: 10,
    border: '1px solid #ddd'
  },
  details: {
    flex: 1
  },
  removeBtn: {
    marginTop: 10,
    padding: '8px 16px',
    backgroundColor: '#cb8885',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
  },
  checkoutBtn: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '12px 20px',
    borderRadius: 6,
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  }
};

export default Cart;
