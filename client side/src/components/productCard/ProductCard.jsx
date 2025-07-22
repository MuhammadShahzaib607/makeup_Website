import React from 'react';
import './productCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src="/img/lipstick.avif" alt="" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Rs.3999/-</p>
    </div>
  );
};

export default ProductCard;
