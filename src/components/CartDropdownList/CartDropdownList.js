import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

import CartDropdownItem from '../CartDropdownItem/CartDropdownItem';

import './CartDropdownList.css';

const CartDropdownList = ({dropdownToggler}) => {
  const history = useHistory();
  const itemsInCart = useSelector((store) => store.cart.data);

  const handleClick = () => {
    dropdownToggler();
    const location = { pathname: '/shop/checkout/checkorders' };
    history.push(location);
  }

  const items = itemsInCart.map((item) => <CartDropdownItem key={item.id} item={item}/>);

  const getTotalInfo = () => {
    let totalItems = 0;
    let totalPrice = 0;
    
    for (let i = 0; i < itemsInCart.length; i++) {
      totalItems += itemsInCart[i].quantity;
      totalPrice += (itemsInCart[i].quantity * itemsInCart[i].price);
    }

    return {
      totalItems,
      totalPrice,
    }
  }

  const totalInfo = getTotalInfo();

  return (
    <>
      <ul className='cartDropdownList__list'>
        {items}
      </ul>
      <p className='cartDropdownList__total'>Total: {totalInfo.totalItems} | ${totalInfo.totalPrice.toFixed(2)}</p>
      <button className='cartDropdownList__checkout-btn' onClick={handleClick}>Checkout</button>
    </>
  );
}

export default CartDropdownList;