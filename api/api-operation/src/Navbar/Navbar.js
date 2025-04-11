import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>🛍️ ShopEasy</Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>
          <span>Cart 🛒</span>
          <span style={styles.count}>{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 40px',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    borderBottom: '1px solid #eaeaea',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoText: {
    color: '#2c3e50',
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: 24,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  },
  link: {
    color: '#2c3e50',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 500,
    padding: '6px 12px',
    borderRadius: 6,
    transition: 'all 0.2s ease-in-out',
  },
  count: {
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    padding: '3px 8px',
    marginLeft: 8,
    fontSize: 13,
    fontWeight: 600,
  },
};

export default Navbar;
