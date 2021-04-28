import React from 'react';
import './CartItem.css';

import images from '../../assets/images/items/index';

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItem__image-wrapper">
        <img src={images.img_1} alt="" className='cartItem__image'/>
      </div>
      <div className="cartItem__product-wrapper">
        <p className='cartItem__product'>Decor</p>
      </div>
      <div className="cartItem__price-wrapper">
        $10.00
      </div>
      <div className="cartItem__quantity-wrapper">
        <div className="cartItem__quantity-button-wrapper">
          <button className='cartItem__plus-btn'>+</button>
          <p className='cartItem__quantity-number'>999</p>
          <button className='cartItem__minus-btn'>-</button>
        </div>
      </div>
      <div className="cartItem__remove-wrapper">
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default CartItem;