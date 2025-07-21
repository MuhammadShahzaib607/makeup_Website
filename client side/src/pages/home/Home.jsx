import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import HomePageCards from '../../components/homePageCards/HomePageCards'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>

<div className="mainContent">
    
    <div className="content">
        <h1>Unlock the Power of True Beauty with Our Exclusive Cosmetics</h1>
        <h3>
            Experience the magic of makeup like never before. Our carefully crafted collection is designed to enhance your natural beauty, empower your confidence, and bring out the glow you deserve.
        </h3>
        <button>Shop Now</button>
    </div>

    <div className="coverImg">
        <img src="/img/coverImg.avif" style={{
            width: "250px"
        }} alt="" />
    </div>
    
</div>

<div className="searchContainer">
    <input type="text" placeholder='Search for Products ....' />
    <button className="searchBtn">Search</button>
</div>

<div className="categoriesCards">
    <HomePageCards />
    <HomePageCards />
    <HomePageCards />
    <HomePageCards />
    <HomePageCards />
    <HomePageCards />
</div>

<div className="mainContent">
    
    <div className="coverImg">
        <img src="/img/footerImg.avif" style={{
            width: "300px"
        }} alt="" />
    </div>

    <div className="content">
        <h1>Glow Beyond Limits with Radiant Skin & Colors</h1>
        <h3>
            Dive into a luxurious world of cosmetics that care for your skin while adding a flawless touch. From bold lipsticks to hydrating foundations, we’ve got everything to keep you glowing, day and night.
        </h3>
        <button style={{
            width: "170px"
        }}>Explore Collection</button>
    </div>
    
</div>

    </div>
  )
}

export default Home