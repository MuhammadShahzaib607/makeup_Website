import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userData, setUserData] = useState({})
  const { pathname } = useLocation()
const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const handleOptionClick = (to) => {
    if (pathname !== to) {
      setIsOpen(false)
    }
  }

  const fetchUser = async ()=> {
    try {
      const userData = await axios.get(`http://localhost:3000/api/v1/auth/getUser/${localStorage.getItem("userId")}`)
      setUserData(userData.data.data)
      // console.log(userData.data.data.isAdmin)
    } catch (error) {
      
    }
  }

  useEffect(()=> {
fetchUser()
  }, [])

  return (
    <div className='navbar' style={{
      display: token ? "flex" : "none" ,
    }}>
      <div className='webName'>
        <Link to='/'>
          <h1 onClick={() => setIsOpen(false)}>AS Cosmo</h1>
        </Link>
      </div>

      <div className='navLinks'>
       <Link to='/' onClick={() => setIsOpen(false)}>
  <li className={pathname === '/' ? 'navLinkActive' : ''}>home</li>
</Link>

<Link to='/about' onClick={() => setIsOpen(false)}>
  <li className={pathname === '/about' ? 'navLinkActive' : ''}>about</li>
</Link>

{userData?.isAdmin ? (
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
      <img src='/img/cartImg.png' height='37px' alt='' className='cart' />
    <div className='profile' onClick={() => setIsOpen(!isOpen)}>
      <img
        src= {userData?.profilePic || "/img/avatar.png" }
        width='30px'
        height='30px'
        style={{
          borderRadius: '50%',
          border: '1px solid pink',
        }}
        alt=''
      />
      <span>{userData?.username}</span>
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
    }} onClick={()=> {navigate("/signup")}}>Get Started</div>
    <div style={{
        color: "white",
        fontSize: "15px",
        cursor: "pointer"
    }} onClick={()=> {navigate("/login")}}>Login</div>
</div>
}

      <div className={`options ${isOpen ? 'active' : ''}`}>
        {userData?.isAdmin ? (
          <Link to='/addProduct' onClick={() => handleOptionClick('/addProduct')}>
            <li>add product</li>
          </Link>
        ) : (
          <Link to='/orders' onClick={() => handleOptionClick('/orders')}>
            <li>orders</li>
          </Link>
        )}

      <Link to='/profile' onClick={() => handleOptionClick('/profile')}>
          <li>profile</li>
        </Link>

        {userData?.isAdmin ? (
          <Link to='/notifications' onClick={() => handleOptionClick('/notifications')}>
            <li>notifications</li>
          </Link>
        ) : (
          <Link to='/editProfile' onClick={() => handleOptionClick('/history')}>
            <li>Edit Profile</li>
          </Link>
        )}

        <li onClick={() => {
          setIsOpen(false)
localStorage.removeItem("token")
localStorage.removeItem("userId")
navigate("/login")
        }}>logout</li>
      </div>
    </div>
  )
}

export default Navbar
