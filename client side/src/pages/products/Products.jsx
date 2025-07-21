import React from 'react'
import "./products.scss"
import ProductCard from '../../components/productCard/ProductCard';

const products = [
  {
    id: 1,
    img: "/img/lipstick.avif",
    name: "Matte Lipstick",
    description: "Smooth, long-lasting and bold color.",
  },
  {
    id: 2,
    img: "/img/foundation.avif",
    name: "HD Foundation",
    description: "Perfect base with 24-hour coverage.",
  },
  {
    id: 3,
    img: "/img/mascara.avif",
    name: "Waterproof Mascara",
    description: "Lift and volume for your lashes.",
  },
  {
    id: 3,
    img: "/img/mascara.avif",
    name: "Waterproof Mascara",
    description: "Lift and volume for your lashes.",
  },
  {
    id: 3,
    img: "/img/mascara.avif",
    name: "Waterproof Mascara",
    description: "Lift and volume for your lashes.",
  },
  {
    id: 3,
    img: "/img/mascara.avif",
    name: "Waterproof Mascara",
    description: "Lift and volume for your lashes.",
  },
  {
    id: 3,
    img: "/img/mascara.avif",
    name: "Waterproof Mascara",
    description: "Lift and volume for your lashes.",
  },
  {
    id: 3,
    img: "/img/mascara.avif",
    name: "Waterproof Mascara",
    description: "Lift and volume for your lashes.",
  },
];

const Products = () => {
  return (
    <div className="productContainer">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default Products