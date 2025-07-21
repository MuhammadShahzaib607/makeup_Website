import React, { useState } from 'react'
import "./navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
const {pathname} = useLocation()
console.log(pathname)

const currentUser = {
    userName: "shahzaib",
    isAdmin: true
}

  return (
    <div className='navbar'>
        <div className="webName">
            <h1>Cosmetics</h1>
        </div>

        <div className="navLinks">
            <Link to="/"><li className={pathname === "/" && "navLinkActive"}>home</li></Link>
            <Link to="/about"><li className={pathname === "/about" && "navLinkActive"}>about</li></Link>
            <Link to="/products"><li className={pathname === "/products" && "navLinkActive"}>products</li></Link>
            <Link to="/contact"><li className={pathname === "/contact" && "navLinkActive"}>contact</li></Link>
        </div>

        <div className="navIcons">
            <img src="/img/cartImg.png" height="26px" style={{

            }} alt="" className="cart" />
            <div className="profile" onClick={()=> setIsOpen(!isOpen)} >
                <img src="/img/avatar.png" width="30px" height="30px" style={{
borderRadius:"50%",
border: "1px solid pink"
            }} alt=""/>
            <span>Muhammad</span>
            </div>
        </div>

  <div className={`options ${isOpen ? 'active' : ''}`}>
 {currentUser.isAdmin ? <li>add product</li> : <li>orders</li> }
 {currentUser.isAdmin ? <li>notifications</li> : <li>History</li> }
            <li>profile</li>
            <li>logout</li>
        </div>

    </div>
  )
}

export default Navbar