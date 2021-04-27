import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import images from '../../assets/images/items/index';

import './GalleryList.css';

const DATA = [
  { id: 1, name: 'pomegranate', category: 'fruits', price: 12.49, src: images.img_1 },
  { id: 2, name: 'raspberry', category: 'fruits', price: 20.10, src: images.img_2 },
  { id: 3, name: 'box-apple', category: 'boxes', price: 10.00, src: images.img_3 },
  { id: 4, name: 'box-blueberries', category: 'boxes', price: 21.55, src: images.img_4 },
  { id: 5, name: 'potatoes', category: 'vegetables', price: 13.20, src: images.img_5 },
  { id: 6, name: 'coffee-beans', category: 'seeds', price: 2.20, src: images.img_6 },
  { id: 7, name: 'walnuts-beans', category: 'seeds', price: 1.34, src: images.img_7 },
  { id: 8, name: 'pumpkin-beans', category: 'seeds', price: 0.95, src: images.img_8 },
  { id: 9, name: 'box-vegetables', category: 'boxes', price: 50.40, src: images.img_9 },
];


const GalleryList = ({category}) => {
  console.log('render gallery');

  const itemComponents = DATA.map((item) => {
    if(category === 'all_categories' || category === item.category) return <GalleryItem key={item.id} item={item}/>;
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