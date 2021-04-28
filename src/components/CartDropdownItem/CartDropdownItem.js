import React from 'react';
import './CartDropdownItem.css';

const CartDropdownItem = () => {
  return (
    <div className="cartDropdownItem">
      <div className="cartDropdownItem__image-wrapper">
        <img src="" alt="" className='cartDropdownItem__image'/>
      </div>
      <div className="cartDropdownItem__text-wrapper">
        <p className='cartDropdownItem__name'>Plant</p>
        <p className='cartDropdownItem__desc'>1 x $0.85</p>
      </div>
      <div className="cartDropdownItem__remove-wrapper">
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default CartDropdownItem;