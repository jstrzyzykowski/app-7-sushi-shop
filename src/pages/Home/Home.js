import React, { useState } from 'react';
import GalleryList from '../../components/GalleryList/GalleryList';

import './Home.css';

const CATEGORIES = {
  ALL_CATEGORIES: 'all categories',
  BOXES: 'boxes',
  VEGETABLES: 'vegetables',
  FRUITS: 'fruits',
  SEEDS: 'seeds',
}

const Home = () => {

  const [category, setCategory] = useState(CATEGORIES.ALL_CATEGORIES);

  const handleClick = (categoryValue) => setCategory(categoryValue);

  const categoriesComponents = Object.keys(CATEGORIES).map((categoryKey, index) => {
  const categoryValue = CATEGORIES[categoryKey];
  const itemClasses = categoryValue === category ? 'gallery__item active' : 'gallery__item';

    return (
      <li key={index} className={itemClasses} onClick={() => handleClick(categoryValue)}>
        {categoryValue}
      </li>
    )
  });

  return (
    <section className='gallery'>
      <div className="gallery__navigation">
        <ul className='gallery__menu'>
          {categoriesComponents}
        </ul>
      </div>
      <GalleryList category={category}/>
    </section>
  );
}

export default Home;