import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation().pathname;

  return (
    <div className='navbar'>
      <button className='hamburger-icon-container-button' onClick={() => setShowDrawer(true)}>
        <img src={assets.hamburger_icon} alt="" />
      </button>
      {showDrawer && <Drawer placement='left' title={<img className='admin-drawer-logo' src={assets.logo} onClick={() => navigate('/')} alt="" />} closable={false} width={'270px'} onClose={() => setShowDrawer(false)} open={showDrawer}>
        <div className='container-div-of-admin-drawer-links'>
          <Link to='/add-item' className={location === '/add-item' ? 'active' : ""}>
            <img src={assets.add_icon} alt="" />
            <span>Add Item</span>
          </Link>
          <Link to='/food-items' className={location === '/food-items' ? 'active' : ""}>
            <img src={assets.food_item_icon} alt="" />
            <span>Food Items</span>
          </Link>
          <Link to='/orders' className={location === '/orders' ? 'active' : ""}>
            <img src={assets.order_icon} alt="" />
            <span>Orders</span>
          </Link>
        </div>
      </Drawer>
      }

      <img className='logo' src={assets.logo} onClick={() => navigate('/')} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar;