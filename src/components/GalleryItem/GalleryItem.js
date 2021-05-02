import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../../actions/cartActions';

import './GalleryItem.css';

const GalleryItem = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.data);

  const checkIsAlreadyInCart = () => {
    const result = cartItems.find((obj) => {
      return obj.id === item.id
    })

    if(result === undefined) return {
      isInCart: false,
      quantity: 0,
    }
    return {
      isInCart: true,
      quantity: result.quantity,
    }
  }

  const handleAddToCartClick = () => {
    const result = checkIsAlreadyInCart();
    dispatch(addToCart(item, result.isInCart));
  }

  const itemNumber = checkIsAlreadyInCart().quantity;

  return (
    <li className='galleryItem'>
      <div className="galleryItem__overlay">
        <Link to={`/shop/product-details/${item.id}`} className='galleryItem__overlay-details-link'>
          <i className="fas fa-info"></i>
        </Link>
        <div className="galleryItem__overlay-footer">
          <p className='galleryItem__overlay-name'>{item.name}</p>
          <p className='galleryItem__overlay-desc'>Lorem Ipsum Dolor</p>
        </div>
      </div>
      <div className="galleryItem__inCartStatus">
        <p className='galleryItem__status-number'>{itemNumber}</p>
        <i className="fas fa-cart-arrow-down"></i>
      </div>
      <div className="gallery__image-wrapper">
        <img src={item.src} alt="" className='galleryItem__image'/>
        <div className='galleryItem__footer'>
          <p className='galleryItem__price'>${item.price.toFixed(2)}</p>
          <button className='galleryItem__addToCart-btn' onClick={handleAddToCartClick}>
            <i className="fas fa-plus"></i>
            <p className='galleryItem__addToCart-btn-text'>Cart</p>
          </button>
        </div>
      </div>
      {/* <div className='galleryItem__footer'>
        <p className='galleryItem__price'>${item.price}</p>
        <button className='galleryItem__addToCart-btn' onClick={handleAddToCartClick}>+ Cart</button>
      </div> */}
    </li>
  );
}

export default GalleryItem;