import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context'
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { Skeleton } from 'antd';

const Cart = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const cartArray = [...new Set(Object.values(cartItems))];
  let isCartEmpty = null;

  if ((cartArray?.length === 1 && cartArray[0] === 0) || !cartArray?.length) isCartEmpty = true;
  else isCartEmpty = false;

  setTimeout(() => {
    setShowSkeleton(false);
  }, 2000);

  return (
    <div className='cart'>
      {showSkeleton ? <Skeleton active /> :
        <>
          {!isCartEmpty ?
            <>
              <div className="cart-items">
                <div className="cart-items-title">
                  <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                  if (cartItems[item._id] > 0) {
                    return (<div key={index}>
                      <div className="cart-items-title cart-items-item">
                        <img src={url + "/images/" + item.image} alt="" />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <div>{cartItems[item._id]}</div>
                        <p>${item.price * cartItems[item._id]}</p>
                        <img className='delete_icon' src={assets?.delete_icon} alt="" onClick={() => removeFromCart(item._id)} />
                      </div>
                      <hr />
                    </div>)
                  }
                })}
              </div>
              <div className="cart-bottom">
                <div className="cart-total">
                  <h2>Cart Totals</h2>
                  <div>
                    <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
                    <hr />
                    <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
                    <hr />
                    <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
                  </div>
                  <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                  <div>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cart-promocode-input'>
                      <input type="text" placeholder='promo code' />
                      <button>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
            : <h2 className='empty-cart-heading'>There are no items in this cart.</h2>
          }
        </>
      }
    </div>
  )
}

export default Cart;