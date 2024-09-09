import React, { useEffect, useState } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Skeleton } from 'antd';

const FoodItems = () => {
  const [list, setList] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const url = import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_DEV_BASE_URL : import.meta.env.VITE_API_PROD_BASE_URL;

  const fetchList = async () => {
    const response = await axios.get('/api/food/list');
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error");
    }

    setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
  }

  const removeFood = async (foodId) => {
    const response = await axios.delete(`/api/food/remove/${foodId}`);
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list food-items-container flex-col">
      {showSkeleton ? <Skeleton active /> :
        <>
          <h3>Food List</h3>
          {list?.length > 0 ?
            <div className="list-table">
              <div className="list-table-format title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
              </div>
              {list.map((item, index) => {
                return (
                  <div key={index} className="list-table-format">
                    <img src={`${url}/images/${item.image}`} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <img
                      className="delete_icon"
                      src={assets?.delete_icon}
                      alt=""
                      onClick={() => removeFood(item._id)}
                    />
                  </div>
                );
              })}
            </div> : <h2 className="no-food-items-heading">No food items available.</h2>
          }
        </>
      }
    </div>
  )
}

export default FoodItems;