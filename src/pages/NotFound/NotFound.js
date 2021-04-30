import React from 'react';
import {useHistory} from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <section className='notFound'>
      <p className='notFound__codeNumber'>404</p>
      <p className='notFound__desc'>Sorry, we couldn't find that page.</p>
      <button className='notFound__back-btn' onClick={handleClick}>Return</button>
    </section>
  );
}

export default NotFound;