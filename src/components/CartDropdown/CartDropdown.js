import React from 'react';
import {useSelector} from 'react-redux';

import CartDropdownList from '../CartDropdownList/CartDropdownList';

import './CartDropdown.css';

const CartDropdown = ({callback}) => {  
  const itemsInCart = useSelector((store) => store.cart.data);
  
  const dropdownContent = itemsInCart.length > 0 
  ? <CartDropdownList dropdownToggler={callback}/> 
  : (
    <>
      <p>Your shopping bag is empty.</p>
      <p>Start shopping.</p>
    </>
  );

  return (
    <div className="cartDropdown">
      {dropdownContent}
    </div>
  );
}

export default CartDropdown;