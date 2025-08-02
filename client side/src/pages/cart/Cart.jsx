import React, { useContext, useEffect, useState } from 'react'
import "./cart.scss"
import CartProductCard from '../../components/cartProductCard/CartProductCard'
import { CartContext } from '../../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {items} = useContext(CartContext)
    const navigate = useNavigate()
console.log(items, "===>> items in CART")

const orderPlacedHandler = ()=> {
    localStorage.removeItem("items")
    navigate("/")
}

  return (
    <div className='cartPage'>

 <div className="cartHeader">
        <h2>Your Shopping Cart</h2>
        <p>You have {items.length} items in your cart.</p>
      </div>

{
    items.map((item, idx)=> {
 return <CartProductCard item={item} key={idx} />
    })
}

 <div className="cartSummary">
          <div className="summaryDetails">
            <h3>Order Summary</h3>
            <p>Total Items: <span>{items.length}</span></p>
            <p>Estimated Total: <span>Rs. {
         items?.reduce((total, item) => total + item.price * item.quantity, 0)
        }/-</span></p>
          </div>

          <button className="orderBtn" onClick={orderPlacedHandler}>Place Order</button>
        </div>
    </div>
  )
}

export default Cart