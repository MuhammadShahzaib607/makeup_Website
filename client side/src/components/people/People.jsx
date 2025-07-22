import React from 'react'
import "./people.scss"

const People = () => {
  return (
<div className="people">
  <div className="container">
    <img src="/img/avatar.png" alt="user" />
    <div className="userName">Syed Muhammad Suleman</div>
    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum nisi quo sed excepturi.</div>
    <div className="stats">
      <div className="item"><span>13</span> Orders</div>
      <div className="item">Karachi, Pakistan</div>
      <div className="item">25 Feb 2025</div>
    </div>
  </div>
</div>
  )
}

export default People