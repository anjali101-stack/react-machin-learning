import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h3 style={styles.heading}>ShopEasy</h3>
        <p style={styles.text}>Your one-stop shop for everything awesome.</p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.subheading}>Quick Links</h4>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
      </div>

      <div style={styles.section}>
        <h4 style={styles.subheading}>Contact</h4>
        <p style={styles.text}>Email: support@shopeasy.com</p>
        <p style={styles.text}>Phone: +1 (555) 123‑4567</p>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copy}>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e1e2f',
    color: '#fff',
    padding: '40px 30px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderTop: '1px solid #333',
  },
  section: {
    flex: '1 1 250px',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 6,
  },
  link: {
    display: 'block',
    fontSize: 14,
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: 6,
  },
  bottom: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    borderTop: '1px solid #333',
    paddingTop: 10,
  },
  copy: {
    fontSize: 13,
    color: '#aaa',
  },
};

export default Footer;
