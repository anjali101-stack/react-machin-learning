import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

import Products from './Fetch-api/Products';
import ProductDetails from './Fetch-api/ProductDetails';
import Cart from './Cart';
import { ToastContainer } from 'react-toastify';
import Main from './Main';
import SeemoreSection from './SeemoreSection';
import CategoryDetail from './CategoryDetail';
import Category from './Category/Category';


const App = () => {
  return (

    <Router>
    
     
<Routes>
  <Route path='/' element={<Main />} />
  <Route path='/item/:id' element={<ProductDetails />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/seemore' element={<SeemoreSection />} />
  <Route path='/category' element={<Category />} />
  <Route path='/category/group/:groupId' element={<CategoryDetail />} />
  </Routes>
      <ToastContainer position="top-right" autoClose={2000} />


    </Router>
  )
}

export default App