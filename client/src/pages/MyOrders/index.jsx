import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../context';
import { assets } from '../../assets/assets';
import { Skeleton } from 'antd';

const MyOrders = () => {
  const [data, setData] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.get("/api/order/userorders", { headers: { token } });
    setData(response.data.data);

    console.log('data', response.data);

    setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      {showSkeleton ? <Skeleton active /> : <>
        <h2>My Orders</h2>
        {data?.length === 0 && <h2 className='no-orders-text'>You have no orders at the moment.</h2>}
        <div className="container">
          {data?.map((order, index) => {
            return (
              <div key={index} className='my-orders-order'>
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  }
                  else {
                    return item.name + " x " + item.quantity + ", ";
                  }

                })}</p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              </div>
            )
          })}
        </div>
      </>
      }
    </div>
  )
}

export default MyOrders;