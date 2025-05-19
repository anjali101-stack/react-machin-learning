import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from './Context/CartContext'

const SeemoreSection = () => {
    const {AddToCart} = useCart()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const FetchApi = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      //console.log(data, 'SeeMore')
      setData(data.products)
    } catch (error) {
      //console.log(error)
    }
  }

  useEffect(() => {
    FetchApi()
  }, [])

  const OpenDetails = (id) => {
    navigate(`/item/${id}`)
  }

  return (
    <>
      <button onClick={() => navigate(-1)} style={styles.backButton}>← Back</button>
    <div style={styles.wrapper}> 
    
      {data &&
        data.map(item => {
          return (
            <>
              <div key={item.id} style={styles.card}>
                <div style={styles.imgdiv} onClick={() => OpenDetails(item.id)}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={styles.image}
                  />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
                <p>
                  <strong>Discount:</strong> {item.discountPercentage}%
                </p>
                <p>
                  <strong>Rating:</strong> {item.rating}
                </p>
                <p>
                  <strong>Stock:</strong> {item.stock}
                </p>

                <button
                  style={styles.cartButton}
                  onClick={() => AddToCart(item)}
                >
                  {' '}
                  🛒 Add to Cart
                </button>
              </div>
            </>
          )
        })}
    </div>
    </>
  )
}

const styles = {
    backButton: {
        marginBottom: 20,
        padding: '6px 16px',
        backgroundColor: '#ddd',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer'
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

export default SeemoreSection
