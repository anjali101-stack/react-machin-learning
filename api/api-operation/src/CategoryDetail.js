// src/components/CategoryDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./Context/CartContext";

const groupData = [
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
  },
  {
    id: "mens-fashion",
    name: "Men's Fashion",
    match: ["mens-shirts", "mens-shoes", "mens-watches"],
  },
  {
    id: "electronics",
    name: "Electronics",
    match: ["smartphones", "motorcycle", "laptops", "tablets"],
  },
  {
    id: "beauty-skincare",
    name: "Beauty & Skincare",
    match: ["beauty", "skin-care", "fragrances"],
  },
  {
    id: "vehicle",
    name: "Vehicle",
    match: ["vehicle", "motorcycle"],
  },
  {
    id: "sports",
    name: "Sports",
    match: ["sunglasses", "sports-accessories", "fragrances"],
  },
];

const CategoryDetail = () => {
  const { groupId } = useParams();
  const [products, setProducts] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(true);
  const {AddToCart}  =  useCart()
  useEffect(() => {
    const fetchGroupProducts = async () => {
      const group = groupData.find((g) => g.id === groupId);

      if (!group) {
        console.warn("Group not found");
        setLoading(false);
        return;
      }

      setGroupName(group.name);
      const allProducts = [];

      for (let slug of group.match) {
        try {
          const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
          const data = await res.json();

          // Make sure data is structured as expected
          if (data?.products) {
            allProducts.push(...data.products);
          }
        } catch (error) {
          console.error(`Failed to fetch products for ${slug}:`, error);
        }
      }

      setProducts(allProducts);
      setLoading(false);
    };

    fetchGroupProducts();
  }, [groupId]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Products for: {groupName}</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {products.length === 0 ? (
            <p>No products found for this category.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                style={{
                  width: "200px",
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h4 style={{ margin: "0.5rem 0" }}>{product.title}</h4>
                <p style={{ color: "green" }}>${product.price}</p>
                <button style={styles.cartButton} onClick={() => AddToCart(product)}> 🛒 Add to Cart</button>

              </div>
            ))
          )}
        </div>
      )}
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
}
export default CategoryDetail;
