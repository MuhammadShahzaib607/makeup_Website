import React from 'react';
import './productCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src="/img/lipstick.avif" alt="" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
