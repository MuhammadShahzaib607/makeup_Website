import React from 'react';
import './productCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={product?.images[0].url} alt="" />
      <h2>{product.name}</h2>
      <p style={{textAlign: "center"}}>{product.description}</p>
      <p>Rs.{product?.price}/-</p>
    </div>
  );
};

export default ProductCard;
