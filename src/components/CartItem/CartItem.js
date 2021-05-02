import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../actions/cartActions';

import './CartItem.css';

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.target.name;
    if(name === 'plus') dispatch(addToCart(cartItem, true));
    if(name === 'minus') dispatch(removeFromCart(cartItem));
  }

  const handleRemove = () => dispatch(removeFromCart(cartItem, cartItem.quantity));
  const isDisabled = cartItem.quantity === 1 ? true : false;

  return (
    <div className="cartItem">
      <div className="cartItem__image-wrapper">
        <img src={cartItem.src} alt="" className='cartItem__image'/>
      </div>
      <div className="cartItem__product-wrapper">
        <p className='cartItem__product'>{cartItem.name}</p>
      </div>
      <div className="cartItem__price-wrapper">
        <p className='cartItem__price'>${cartItem.price.toFixed(2)}</p>
      </div>
      <div className="cartItem__quantity-wrapper">
        <div className="cartItem__quantity-button-wrapper">
          <button className='cartItem__plus-btn' onClick={handleClick} name='plus'>+</button>
          <p className='cartItem__quantity-number'>{cartItem.quantity}</p>
          <button className='cartItem__minus-btn' onClick={handleClick} name='minus' disabled={isDisabled}>-</button>
        </div>
      </div>
      <div className="cartItem__remove-wrapper">
        <i className="fas fa-trash-alt" onClick={handleRemove}></i>
      </div>
    </div>
  );
}

export default CartItem;