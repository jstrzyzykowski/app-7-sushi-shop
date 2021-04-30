import React from 'react';
import {useSelector} from 'react-redux';

import CartDropdownList from '../CartDropdownList/CartDropdownList';

import './CartDropdown.css';

const CartDropdown = ({callback}) => {  
  const itemsInCart = useSelector((store) => store.cart.data);
  
  const dropdownContent = itemsInCart.length > 0 
  ? <CartDropdownList dropdownToggler={callback}/> 
  : (
    <div className='cartDropdown__empty-box'>
      <i className="fas fa-box-open"></i>
      <p className='cartDropdown__empty-box-text'>Your shopping bag is empty</p>
    </div>
  );

  return (
    <div className="cartDropdown">
      {dropdownContent}
    </div>
  );
}

export default CartDropdown;