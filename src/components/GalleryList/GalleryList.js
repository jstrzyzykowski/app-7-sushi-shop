import React from 'react';
import {useSelector} from 'react-redux';

import GalleryItem from '../GalleryItem/GalleryItem';

import './GalleryList.css';

const GalleryList = ({category}) => {
  const items = useSelector((store) => store.items.data);

  const itemComponents = items.map((item) => {
    if(category === 'all categories' || category === item.category) return <GalleryItem key={item.id} item={item}/>;
    return null;
  });

  return (
    <div className="galleryList">
      <ul className='galleryList__list'>
        {itemComponents}
      </ul>
    </div>
  );
}

export default GalleryList;