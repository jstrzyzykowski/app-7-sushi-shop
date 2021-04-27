import React from 'react';
import { useHistory } from 'react-router';
import './Checkout.css';

const COLUMNS = ['Image', 'Product', 'Price', 'Quantity'];

const Checkout = () => {
  const history = useHistory();

  const handleClick = () => {
    const location = {
      pathname: '/shop'
    }
    history.push(location);
  };

  const tableHeaderTitles = COLUMNS.map((title, index) => <p key={index}>{title}</p>);

  return (
    <section className="checkout">
      <div className="checkout__table-header">
        {tableHeaderTitles}
      </div>
      <div className="checkout__table-content">
        {/* If no items in cart then text otherwise Item components */}
        <p className='checkout__content-text-empty'>No items in the cart</p>
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