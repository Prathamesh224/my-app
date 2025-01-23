// src/pages/Product.js

import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Product.css';
 // Optional: Add styles specific to this page

const Product = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 50 },
    // Add more product data here
  ];

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
