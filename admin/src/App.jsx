import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import FoodItems from './pages/FoodItems';
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/food-items" element={<FoodItems />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;