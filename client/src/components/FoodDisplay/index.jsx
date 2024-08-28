import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem'
import { StoreContext } from '../../context'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <>
      <div className={food_list?.length > 0 ? 'food-display-with-items' : 'food-display-without-items'}>
        {food_list?.length > 0 ? <h2 className='top-dishes-heading'>Top dishes near you</h2> : <h2 className='no-dishes-available-heading'>No dishes available. Please check back soon or contact the admin.</h2>}
        {food_list?.length > 0 && <div className='food-display-list'>
          {food_list?.map((item, index) => {
            if (category === "All" || category === item.category) {
              return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />
            }
            else if (index === food_list?.length - 1) {
              return <h2 className='no-dishes-available-for-category'>No dishes available in this category.</h2>
            }
          })}
        </div>}
      </div>
      <hr className='food-display-bottom-hr' />
    </>
  )
}

export default FoodDisplay;
