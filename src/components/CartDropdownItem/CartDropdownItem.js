import React from 'react';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../../actions/cartActions';

import './CartDropdownItem.css';

const CartDropdownItem = ({item}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item, item.quantity));
  }

  return (
    <div className="cartDropdownItem">
      <div className="cartDropdownItem__image-wrapper">
        <img src={item.src} alt="" className='cartDropdownItem__image'/>
      </div>
      <div className="cartDropdownItem__text-wrapper">
        <p className='cartDropdownItem__name'>{item.name}</p>
        <p className='cartDropdownItem__desc'>{item.quantity} x ${item.price.toFixed(2)}</p>
      </div>
      <div className="cartDropdownItem__remove-wrapper">
        <i className="fas fa-trash-alt" onClick={handleRemove}></i>
      </div>
    </div>
  );
}

export default CartDropdownItem;