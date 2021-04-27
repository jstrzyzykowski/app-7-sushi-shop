import React from 'react';
import {Link, useParams} from 'react-router-dom';

import './Details.css';

// !DEBUG
import images from '../../assets/images/items/index';

const Details = () => {
  const { productId } = useParams();

  return (
    <section className='details'>
      <div className="details__wrapper">
        <div className="details__image-wrapper">
          <img src={images.img_1} alt="" className='details__image'/>
        </div>
        <div className="details__text-wrapper">
          <p className='details__productName'>Product - {productId}</p>
          <p className='details__productPrice'>$Hello Lorem</p>
          <p className='details__productDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae numquam porro minus dolores quia excepturi veniam nulla, maiores minima delectus tempora unde perferendis placeat doloribus tempore consectetur incidunt dolorum sed?</p>
          <p className='details__productImportInfo'>Imported: NO</p>
          <hr className='details__divider'/>
          <div className="details__socials">
            <Link to='/' className='details__link facebook'>
              <i className="fab fa-facebook-f"></i>
              Like
            </Link>
            <Link to='/' className='details__link twitter'>
              <i className="fab fa-twitter"></i>
              Tweet
            </Link>
            <Link to='/' className='details__link pinterest'>
              <i className="fab fa-pinterest"></i>
              Save
            </Link>
            <Link to='/' className='details__link googlePlus'>
              <i className="fab fa-google-plus-g"></i>
              Share
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;