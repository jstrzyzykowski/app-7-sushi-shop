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
    history.push('/shop/checkout/checkorders');
  }

  const items = itemsInCart.map((item) => <CartDropdownItem key={item.id} item={item}/>);

  return (
    <>
      <ul>
        {items}
      </ul>
      <p className='cartDropdown__total'>Total: 0 X 0$</p>
      <button className='cartDropdown__checkout-btn' onClick={handleClick}>Checkout</button>
    </>
  );
}

export default CartDropdownList;