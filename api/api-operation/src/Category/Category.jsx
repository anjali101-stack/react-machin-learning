import React, { useEffect, useState } from "react";
import "./Category.css"; // Import the CSS file


const Category = () => {
  const [categories , setCategories] = useState([])
  const [display , setDisplay] = useState([])
  const GroupCategories = [
    {
      name: "Women's Fashion",
      match: ["womens-dresses", "womens-shoes", "womens-bags", "womens-jewellery", "womens-watches"],
      icon: "👜",
    },
    {
      name: "Men's Fashion",
      match: ["mens-shirts", "mens-shoes", "mens-watches"],
      icon: "👔",
    },
    {
      name: "Electronics",
      match: ["smartphones", "laptops", "tablets"],
      icon: "💻",
    },
    {
      name: "Beauty & Skincare",
      match: ["beauty", "skin-care", "fragrances"],
      icon: "💄",
    }
  ]

  const getCategories = async() => {
    try{

      const res = await fetch("https://dummyjson.com/products/categories")

      const data = await res.json()

      setCategories(data)
      console.log(data,"===========")
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getCategories()
  }, [])
  useEffect(() => {
    // Convert API categories to lowercase and kebab-case
    const normalizedCategories = categories
    .filter(cat => typeof cat === 'string') // 🛡️ prevent .toLowerCase errors
    .map(cat =>
      cat
        .replace(/^Womens/i, 'women')       // optional: correct plural forms
        .replace(/^Mens/i, 'men')
        .toLowerCase()
        .replace(/\s+/g, '-')               // space ➜ dash
    );
  
    
  const grouped = GroupCategories.filter(group =>
    group.match.some(matchItem => normalizedCategories.includes(matchItem))
  );
  
    setDisplay(grouped);
  }, [categories]);

  useEffect(() => {
    console.log("Raw categories from API:", categories);
  }, [categories]);

  console.log(display)

  return (
    <div className="category-container">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-grid">
        {display.map((cat, index) => {
          console.log(cat.name)
          return(
            <div className="category-card" key={index}>
            <div className="category-icon">{cat.icon}</div>
            <p className="category-name">{cat.name}</p>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Category;
