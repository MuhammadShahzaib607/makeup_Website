import React from 'react'
import "./cartProductCard.scss"

const CartProductCard = ({item}) => {
  return (
    <div className='cartProductCard'>
      <img src={item?.img} alt="product" className='productImg' />

      <div className="details">
        <div className="productName">{item?.name}</div>
        <div className="price">Rs.{item?.price}/-</div>
        <div className="quantity">Quantity: <span>{item?.quantity}</span></div>
        <div className="desc">{item?.description}</div>
      </div>

      <button className="deleteBtn">✕</button>
    </div>
  )
}

export default CartProductCard
