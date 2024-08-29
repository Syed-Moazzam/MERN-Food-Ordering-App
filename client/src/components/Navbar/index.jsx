import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context'
import { toast } from 'react-toastify';
import { Drawer } from 'antd';

const Navbar = ({ setShowLogin }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
    toast.success('Logged Out Successfully');
  }

  return (
    <div className='navbar'>
      <button className='container-btn-of-hamburger-icon' onClick={() => setShowDrawer(true)}><img src={assets.hamburger_icon} alt="" /></button>
      {showDrawer && <Drawer placement='left' title="Tomato." closable={false} width={'270px'} onClose={() => setShowDrawer(false)} open={showDrawer}>
        <div className='container-div-of-drawer-links'>
          <Link to="/" className={`${location === "/" ? "active" : ""}`}>
            <img src={assets.home_icon} alt="" />
            <span>home</span>
          </Link>
          <Link to="/about" className={`${location === "/about" ? "active" : ""}`}>
            <img src={assets.about_icon} alt="" />
            <span>about</span>
          </Link>
          <Link to="/contact" className={`${location === "/contact" ? "active" : ""}`}>
            <img src={assets.contact_icon} alt="" />
            <span>contact</span>
          </Link>
        </div>
      </Drawer>
      }

      <Link to='/' className='app-logo-of-navbar'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" className={`${location === "/" ? "active" : ""}`}>home</Link>
        <Link to="/about" className={`${location === "/about" ? "active" : ""}`}>about</Link>
        <Link to="/contact" className={`${location === "/contact" ? "active" : ""}`}>contact</Link>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-cart-icon'>
          {token && <img src={assets.basket_icon} alt="" />}
          <div className={token && getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/my-orders')}> <img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;