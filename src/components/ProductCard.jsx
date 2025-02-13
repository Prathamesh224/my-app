// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
