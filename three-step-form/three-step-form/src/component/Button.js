import React from 'react';

const Button = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  style = {},
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
      style={{
        padding: '10px 20px',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: '0.3s ease',
        ...style
      }}
    >
      {text}
    </button>
  );
};

export default Button;
