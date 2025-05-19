// src/components/Category.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

const GroupCategories = [
  {
    id: "womens-fashion",
    name: "Women's Fashion",
    match: [
      "womens-watches",
      "womens-shoes",
      "womens-jewellery",
      "womens-dresses",
      "womens-bags",
      "tops",
    ],
    icon: "👜",
  },
  {
    id: "mens-fashion",
    name: "Men's Fashion",
    match: ["mens-shirts", "mens-shoes", "mens-watches"],
    icon: "👔",
  },
  {
    id: "electronics",
    name: "Electronics",
    match: ["smartphones", "motorcycle", "laptops", "tablets"],
    icon: "💻",
  },
  {
    id: "beauty-skincare",
    name: "Beauty & Skincare",
    match: ["beauty", "skin-care", "fragrances"],
    icon: "💄",
  },
  {
    id: "vehicle",
    name: "Vehicle",
    match: ["vehicle", "motorcycle"],
    icon: "🚗",
  },
  {
    id: "sports",
    name: "Sports",
    match: ["sunglasses", "sports-accessories", "fragrances"],
    icon: "🏀",
  },
];

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [display, setDisplay] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();

      const formatted = data.map((item) => ({
        slug: item.slug?.slug || item.slug,
        name: item.slug?.name || item.name || item.slug,
        url: item.slug?.url,
      }));

      setCategories(formatted);
    } catch (error) {
      console.log("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (!categories.length) return;

    const allSlugs = categories.map((cat) => cat.slug);

    const grouped = GroupCategories.map((group) => {
      const matchedSlugs = group.match.filter((slug) =>
        allSlugs.includes(slug)
      );
      return matchedSlugs.length
        ? { ...group, match: matchedSlugs }
        : null;
    }).filter(Boolean);

    setDisplay(grouped);
  }, [categories]);

  return (
    <div className="category-container">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-grid">
        {display.length === 0 ? (
          <p>Loading categories...</p>
        ) : (
          display.map((cat, index) => (
            <div
              className="category-card"
              key={index}
              onClick={() => navigate(`/category/group/${cat.id}`)}
            >
              <div className="category-icon">{cat.icon}</div>
              <p className="category-name">{cat.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
