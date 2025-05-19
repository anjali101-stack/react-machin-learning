import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import Navbar from '../Navbar/Navbar';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { AddToCart } = useCart()

  const GetProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=6");
      const result = await res.json();
      setData(result.products);
      //console.log(result)
    } catch (err) {
      //console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);


  const OpenDetails = (id) => {
    navigate(`/item/${id}`)
    //console.log("open details")
  }
  return (
    <div >
      {loading ? (
        <h1>Loading...</h1>
      ) :

        <div >

          <div style={styles.wrapper}>

            {

              data.map((item) => (
                <>
                  <div key={item.id} style={styles.card}>

                    <div style={styles.imgdiv} onClick={() => OpenDetails(item.id)}>

                      <img src={item.thumbnail} alt={item.title} style={styles.image} />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Discount:</strong> {item.discountPercentage}%</p>
                    <p><strong>Rating:</strong> {item.rating}</p>
                    <p><strong>Stock:</strong> {item.stock}</p>

                    <button style={styles.cartButton} onClick={() => AddToCart(item)}> 🛒 Add to Cart</button>
                  </div>

                 
                </>

              ))
            }
          </div>

          <div style={styles.seemorediv}>
            <Link to="/seemore" style={styles.seeMoreButton}>
              👀 See more...
            </Link>
          </div>

        </div>
      }
    </div>
  );
};

const styles = {
  seemorediv:{
    margin: 30,
    display: 'flex',
    justifyContent:"center"
    

    // justifyContent: "center"
  
  }
  ,
  seeMoreButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#f2bf32',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    textAlign: 'center'
  },  
  imgdiv: {
    display: 'flex',
    justifyContent: 'center',
  },
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
    width: '60%',
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
