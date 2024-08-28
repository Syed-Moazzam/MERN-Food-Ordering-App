import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context';
import { toast } from 'react-toastify';

const FoodItem = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart, url, token } = useContext(StoreContext);

    const handleItemAdditionToCart = (id) => {
        if (token) {
            addToCart(id);
        }
        else {
            toast.error('Please Login To Add Items To Cart');
        }
    }

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url + "/images/" + image} alt="" />
                {cartItems && !cartItems[id] ?
                    <img className='add' onClick={() => handleItemAdditionToCart(id)} src={assets.add_icon_white} alt="" />
                    : cartItems && cartItems[id] ? <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div> : <img className='add' onClick={() => toast.error('Please Login To Add Items To Cart')} src={assets.add_icon_white} alt="" />
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;