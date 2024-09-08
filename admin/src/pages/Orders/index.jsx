import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { Skeleton } from 'antd';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const fetchAllOrders = async () => {
    const response = await axios.get('/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data.reverse());
      console.log(response.data.data);
    }
    else {
      toast.error("Error");
    }

    setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.patch('/api/order/status', {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div className='order orders-container flex-col'>
      {showSkeleton ? <Skeleton active /> :
        <>
          <h3>All Orders</h3>
          {orders?.length > 0 ? <div className="order-list">
            {orders.map((order, index) => (
              <div key={index} className='order-item'>
                <img src={assets.parcel_icon} alt="" />
                <div>
                  <p className='order-item-food'>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity
                      }
                      else {
                        return item.name + " x " + item.quantity + ", "
                      }
                    })}
                  </p>
                  <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
                  <div className='order-item-address'>
                    <p>{order.address.street + ","}</p>
                    <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                  </div>
                  <p className='order-item-phone'>{order.address.phone}</p>
                </div>
                <p>Items : {order.items.length}</p>
                <p>${order.amount}</p>
                <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
                  <option value="Food Processing">&nbsp; Food Processing &nbsp;</option>
                  <option value="Out For Delivery">&nbsp; Out For Delivery &nbsp;</option>
                  <option value="Delivered">&nbsp; Delivered &nbsp;</option>
                </select>
              </div>
            ))}
          </div> : <h2 className='no-orders-placed-heading'>No orders have been placed yet.</h2>}
        </>
      }
    </div>
  )
}

export default Orders;