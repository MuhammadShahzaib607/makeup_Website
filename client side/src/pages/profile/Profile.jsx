import React from 'react'
import { Link } from 'react-router-dom'
import "./profile.scss"
import ProfileOrdersCard from '../../components/profileOrdersCard/ProfileOrdersCard'

const Profile = () => {
  return (
    <div className='profileContainer'>
<div className="left">
    <div className="userName">
        <div>UserName</div>
        <div>Muhammad Shahzaib</div>
    </div>
    <div className='email'>
        <div>Email</div>
        <div>Shahzaib@gmail.com</div>
    </div>

    <div className="desc">
        <div>Description</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque blanditiis voluptatem incidunt saepe totam quas quasi, omnis explicabo sit architecto sapiente! Necessitatibus veniam ipsum numquam nemo? Quibusdam quae alias eum fuga. Fugiat perspiciatis consequatur impedit sint,</div>
    </div>

    <div className="totalOrders">
<div>Orders</div>
<span>22</span>
    </div>

{/* <div className="cardContainer">
    <ProfileOrdersCard />
    <ProfileOrdersCard />
    <ProfileOrdersCard />
    <ProfileOrdersCard />
    <ProfileOrdersCard />
    <ProfileOrdersCard />
</div> */}

</div>

<div className="right">
    <h2>Muhammad Shahzaib</h2>
    <img src="/img/avatar.png" alt="" />
   <Link to="/editProfile"><div className="editBtn">Edit Profile</div></Link>
</div>
    </div>
  )
}

export default Profile