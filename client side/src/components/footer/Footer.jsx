import React from 'react'
import "./footer.scss"

const Footer = () => {
  const token = localStorage.getItem("token")
  return (
<footer className="footer" style={{
      display: token ? "flex" : "none" ,
    }}>
  <ul className="footerLinks">
    <li>Home</li>
    <li>About</li>
    <li>Products</li>
    <li>Contact</li>
    <li>Orders</li>
    <li>Login</li>
    <li>Sign Up</li>
  </ul>
</footer>

  )
}

export default Footer