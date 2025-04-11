import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

import Products from './Fetch-api/Products';
import ProductDetails from './Fetch-api/ProductDetails';
import Cart from './Cart';
import { ToastContainer } from 'react-toastify';
import Main from './Main';


const App = () => {
  return (

    <Router>
    
      <Routes>
        <Route path='/' element= {<Main/>}/>
        <Route path='/item/:id' element= {<ProductDetails/>}/>
        <Route path='/cart' element = {<Cart/>}/>

      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />


    </Router>
  )
}

export default App