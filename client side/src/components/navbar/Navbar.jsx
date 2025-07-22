import React, { useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const token = localStorage.getItem("token")

  const currentUser = {
    userName: 'shahzaib',
    isAdmin: false,
  }

  const handleOptionClick = (to) => {
    if (pathname !== to) {
      setIsOpen(false)
    }
  }

  return (
    <div className='navbar'>
      <div className='webName'>
        <Link to='/'>
          <h1 onClick={() => setIsOpen(false)}>Cosmetics</h1>
        </Link>
      </div>

      <div className='navLinks'>
       <Link to='/' onClick={() => setIsOpen(false)}>
  <li className={pathname === '/' ? 'navLinkActive' : ''}>home</li>
</Link>

<Link to='/about' onClick={() => setIsOpen(false)}>
  <li className={pathname === '/about' ? 'navLinkActive' : ''}>about</li>
</Link>

{currentUser.isAdmin ? (
  <Link to='/products' onClick={() => setIsOpen(false)}>
    <li className={pathname === '/products' ? 'navLinkActive' : ''}>products</li>
  </Link>
) : (
  <Link to='/peoples' onClick={() => setIsOpen(false)}>
    <li className={pathname === '/peoples' ? 'navLinkActive' : ''}>peoples</li>
  </Link>
)}

<Link to='/contact' onClick={() => setIsOpen(false)}>
  <li className={pathname === '/contact' ? 'navLinkActive' : ''}>contact</li>
</Link>

      </div>
      
       {token ?
  <div className='navIcons' style={{
    display: "flex",
    gap: "25px"
  }}>
      <img src='/img/cartImg.png' height='26px' alt='' className='cart' />
    <div className='profile' onClick={() => setIsOpen(!isOpen)}>
      <img
        src='/img/avatar.png'
        width='30px'
        height='30px'
        style={{
          borderRadius: '50%',
          border: '1px solid pink',
        }}
        alt=''
      />
      <span>Muhammad</span>
    </div>
  </div>
: 
<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px"
}}>
    <div style={{
        color: "#D63384",
        fontSize: "13px",
        // fontWeight: "600",
        cursor: "pointer",
        backgroundColor: "white",
        borderRadius: "30px",
        padding: "7px 18px"
    }}>Get Started</div>
    <div style={{
        color: "white",
        fontSize: "15px"
    }}>Login</div>
</div>
}

      <div className={`options ${isOpen ? 'active' : ''}`}>
        {currentUser.isAdmin ? (
          <Link to='/addProduct' onClick={() => handleOptionClick('/addProduct')}>
            <li>add product</li>
          </Link>
        ) : (
          <Link to='/orders' onClick={() => handleOptionClick('/orders')}>
            <li>orders</li>
          </Link>
        )}

        {currentUser.isAdmin ? (
          <Link to='/notifications' onClick={() => handleOptionClick('/notifications')}>
            <li>notifications</li>
          </Link>
        ) : (
          <Link to='/history' onClick={() => handleOptionClick('/history')}>
            <li>History</li>
          </Link>
        )}

        <Link to='/profile' onClick={() => handleOptionClick('/profile')}>
          <li>profile</li>
        </Link>

        <li onClick={() => setIsOpen(false)}>logout</li>
      </div>
    </div>
  )
}

export default Navbar
