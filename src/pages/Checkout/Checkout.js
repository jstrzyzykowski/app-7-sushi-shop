import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';

import './Checkout.css';

const COLUMNS = ['Image', 'Product', 'Price', 'Quantity'];

const Checkout = () => {
  const history = useHistory();
  const itemsInCart = useSelector((store) => store.cart.data);

  const handleClick = () => {
    const location = { pathname: '/shop' };
    history.push(location);
  };

  const tableHeaderTitles = COLUMNS.map((title, index) => <p key={index}>{title}</p>);
  const cartItemComponents = itemsInCart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>);
  const tableContent = itemsInCart.length > 0 
  ? cartItemComponents 
  : (
    <div className="checkout__content-empty-wrapper">
      <i class="fas fa-box-open"></i>
      <p className='checkout__content-empty-text'>No items in the cart</p>
    </div>
  );

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
    <section className="checkout">
      <div className="checkout__table-header">
        {tableHeaderTitles}
      </div>
      <div className="checkout__table-content">
        {tableContent}
      </div>
      <div className="checkout__table-footer">
        <p className='checkout__total-text'>Total: {totalInfo.totalItems} x <span>${totalInfo.totalPrice.toFixed(2)}</span></p>
      </div>
      <div className="checkout__buttons">
        <div className="checkout__button-wrapper">
          <button onClick={handleClick} className='checkout__button-continue'>Continue Shopping</button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;