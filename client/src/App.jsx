import React, { useContext, useEffect, useState } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import LoginPopup from './components/LoginPopup'
import PlaceOrder from './pages/PlaceOrder'
import MyOrders from './pages/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflowY = 'hidden';
    }
    else {
      document.body.style.overflowY = 'scroll';
    }
  }, [showLogin]);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={isLoggedIn ? <Cart /> : <Navigate to={'/'} />} />
          <Route path='/order' element={isLoggedIn ? <PlaceOrder /> : <Navigate to={'/'} />} />
          <Route path='/my-orders' element={isLoggedIn ? <MyOrders /> : <Navigate to={'/'} />} />
          <Route path='/verify' element={isLoggedIn ? <Verify /> : <Navigate to={'/'} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
