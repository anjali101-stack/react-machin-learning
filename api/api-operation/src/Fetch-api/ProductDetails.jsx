import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const {AddToCart} = useCart()

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>← Back</button>

      <div style={styles.card}>
        <img src={product.thumbnail} alt={product.title} style={styles.thumbnail} />

        <div style={styles.details}>
          <h1 style={styles.title}>{product.title}</h1>
          <p style={styles.description}>{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Discount:</strong> {product.discountPercentage}%</p>
          <p><strong>Rating:</strong> {product.rating} ⭐</p>
          <p><strong>Stock:</strong> {product.stock} units</p>
          <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Weight:</strong> {product.weight}g</p>
          <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} mm</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Shipping:</strong> {product.shippingInformation}</p>
          <p><strong>Availability:</strong> {product.availabilityStatus}</p>
          <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
          <p><strong>Min Order Quantity:</strong> {product.minimumOrderQuantity}</p>
          <p><strong>Created At:</strong> {new Date(product.meta.createdAt).toLocaleDateString()}</p>
          <p><strong>Updated At:</strong> {new Date(product.meta.updatedAt).toLocaleDateString()}</p>
          <p><strong>Barcode:</strong> {product.meta.barcode}</p>
          <img src={product.meta.qrCode} alt="QR Code" style={styles.qr} />
        </div>
      </div>

      <div>
        <h2 style={{ marginTop: 30 }}>Images</h2>
        <div style={styles.imageGallery}>
          {product.images.map((img, idx) => (
            <img key={idx} src={img} alt="Product" style={styles.smallImage} />
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ marginTop: 30 }}>Customer Reviews</h2>
        {product.reviews.map((review, idx) => (
          <div key={idx} style={styles.reviewCard}>
            <p><strong>{review.reviewerName}</strong> ({review.rating}⭐)</p>
            <p>{review.comment}</p>
            <small>{new Date(review.date).toLocaleDateString()}</small>
          </div>
        ))}
      </div>

      <button style={styles.cartButton} onClick={()=> AddToCart(product)}> 🛒 Add to Cart</button>

    </div>
  );
};

const styles = {
    cartButton: {
        marginTop: 20,
        padding: '10px 20px',
        backgroundColor: '#f2bf32',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 16
      },
  container: {
    padding: 30,
    fontFamily: 'Arial, sans-serif',
    maxWidth: 1000,
    margin: '0 auto'
  },
  backButton: {
    marginBottom: 20,
    padding: '6px 16px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer'
  },
  card: {
    display: 'flex',
    gap: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  thumbnail: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: 10
  },
  details: {
    flex: 1
  },
  title: {
    marginBottom: 10
  },
  description: {
    color: '#555',
    marginBottom: 15
  },
  imageGallery: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 10
  },
  smallImage: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: 6,
    border: '1px solid #ccc'
  },
  reviewCard: {
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  qr: {
    marginTop: 10,
    width: 100,
    height: 100
  }
};

export default ProductDetails;
