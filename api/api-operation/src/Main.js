import React from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Fetch-api/Products'
import Footer from './Footer'
import Hero from './Hero'
import Category from './Category/Category'

const Main = () => {
  return (
    <div>
        <Navbar/>

        <Hero/>
        <Category/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Main