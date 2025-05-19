import React, { useEffect, useState } from 'react';
import { useCart } from './Context/CartContext';

const TotalPrice = () => {
  const { cartItems } = useCart();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((s, item) => s + item.price, 0);
    setSum(total);
  }, [cartItems]);

  return (
    <div style={styles.totalBox}>
      <h2 style={styles.totalTitle}>Cart Summary</h2>

      {/* Product previews with price */}
      {cartItems.map((item) => (
        <div key={item.id} style={styles.itemRow}>
          <img src={item.thumbnail} alt={item.title} style={styles.image} />
          <p style={styles.price}>${item.price}</p>
        </div>
      ))}

      {/* Summary */}
      <div style={styles.summary}>
        <p style={styles.itemCount}>Total Items: {cartItems.length}</p>
        <p style={styles.totalAmount}>Total: <strong>${sum.toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

const styles = {
  totalBox: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  totalTitle: {
    fontSize: 22,
    marginBottom: 15,
    color: '#333',
    textAlign: 'center'
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
    borderBottom: '1px solid #ddd',
    paddingBottom: 8
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: 6,
    border: '1px solid #ccc'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444'
  },
  summary: {
    marginTop: 20,
    textAlign: 'center'
  },
  itemCount: {
    fontSize: 16,
    color: '#666'
  },
  totalAmount: {
    fontSize: 18,
    color: '#000',
    marginTop: 5
  }
};

export default TotalPrice;
