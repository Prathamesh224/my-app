// src/pages/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Replace with actual API call or data fetch
  const product = { id: 1, name: 'Product 1', description: 'This is a great product.', price: 20 };

  return (
    <div className="product-details-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
