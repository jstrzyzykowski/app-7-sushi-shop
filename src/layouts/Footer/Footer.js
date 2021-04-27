import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__boxes">
        <div className="footer__boxes-container">
        <div className="footer__box">
            <i className="fas fa-truck"></i>
            <div className="footer__box-text">
              <p className='footer__text-name'>
                Money back guaranteed
              </p>
              <p className='footer__text-desc'>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="footer__box">
            <i className="fas fa-truck"></i>
            <div className="footer__box-text">
              <p className='footer__text-name'>
                Money back guaranteed
              </p>
              <p className='footer__text-desc'>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="footer__box">
            <i className="fas fa-truck"></i>
            <div className="footer__box-text">
              <p className='footer__text-name'>
                Money back guaranteed
              </p>
              <p className='footer__text-desc'>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <div className="footer__copy-container">
          <p className='footer__copy-text'>
            Copyrights &copy; MateStore 2019 All Rights Reserved
          </p>
          <div className="footer__payments">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;