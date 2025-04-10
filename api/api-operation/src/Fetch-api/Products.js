import React, { useEffect, useState } from 'react';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      setData(result.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div style={styles.wrapper}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.thumbnail} alt={item.title} style={styles.image} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Discount:</strong> {item.discountPercentage}%</p>
            <p><strong>Rating:</strong> {item.rating}</p>
            <p><strong>Stock:</strong> {item.stock}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>SKU:</strong> {item.sku}</p>
            <p><strong>Weight:</strong> {item.weight}g</p>
            <p><strong>Dimensions:</strong> {item.dimensions?.width} x {item.dimensions?.height} x {item.dimensions?.depth} mm</p>
            <p><strong>Warranty:</strong> {item.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {item.shippingInformation}</p>
            <p><strong>Status:</strong> {item.availabilityStatus}</p>
            <p><strong>Return Policy:</strong> {item.returnPolicy}</p>
            <p><strong>Minimum Order:</strong> {item.minimumOrderQuantity}</p>
            <p><strong>Tags:</strong> {item.tags.join(', ')}</p>
            <h4>Reviews:</h4>
            {item.reviews?.map((review, index) => (
              <div key={index} style={styles.review}>
                <p><strong>{review.reviewerName}</strong> ({review.rating}★)</p>
                <p>{review.comment}</p>
              </div>
            ))}
            <p><strong>Created At:</strong> {new Date(item.meta.createdAt).toLocaleDateString()}</p>
            <p><strong>Updated At:</strong> {new Date(item.meta.updatedAt).toLocaleDateString()}</p>
            <p><strong>Barcode:</strong> {item.meta.barcode}</p>
            <img src={item.meta.qrCode} alt="QR Code" style={{ width: 100, height: 100 }} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
              {item.images.map((img, idx) => (
                <img key={idx} src={img} alt="Product" style={styles.smallImage} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    padding: 20,
    justifyContent: 'center'
  },
  card: {
    width: 350,
    border: '1px solid #ccc',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 10,
    marginBottom: 10
  },
  smallImage: {
    width: 60,
    height: 60,
    objectFit: 'cover',
    borderRadius: 6,
    border: '1px solid #eee'
  },
  review: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 6,
    marginBottom: 5
  }
};

export default Products;
