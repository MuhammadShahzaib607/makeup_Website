import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import Peoples from './pages/peoples/Peoples';
import Orders from './pages/orders/Orders';
import Notifications from './pages/notifications/Notifications';
import Profile from './pages/profile/Profile';
import History from './pages/history/History';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import AddProduct from './pages/addProduct/AddProduct';
import EditProfile from './pages/editProfile/EditProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/peoples" element={<Peoples />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;