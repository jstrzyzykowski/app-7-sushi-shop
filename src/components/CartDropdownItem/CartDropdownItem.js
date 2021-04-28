import React from 'react';
import './CartDropdownItem.css';

const CartDropdownItem = ({item}) => {
  return (
    <div className="cartDropdownItem">
      <div className="cartDropdownItem__image-wrapper">
        <img src={item.src} alt="" className='cartDropdownItem__image'/>
      </div>
      <div className="cartDropdownItem__text-wrapper">
        <p className='cartDropdownItem__name'>{item.name}</p>
        <p className='cartDropdownItem__desc'>{item.quantity} x ${item.price}</p>
      </div>
      <div className="cartDropdownItem__remove-wrapper">
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default CartDropdownItem;