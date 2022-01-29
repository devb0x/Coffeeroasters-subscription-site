import React from 'react';

import classes from './collection.module.css'
import Item from "../../UI/Item/Item"

import grandEspresso from '../../../assets/home/desktop/image-gran-espresso.png'
import planalto from '../../../assets/home/desktop/image-planalto.png'
import picollo from '../../../assets/home/desktop/image-piccollo.png'
import danche from '../../../assets/home/desktop/image-danche.png'

function Collection() {
  const collection = [
    {
      id: 1,
      img: grandEspresso,
      name: 'Gran Espresso',
      description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
    },
    {
      id: 2,
      img: planalto,
      name: 'Planalto',
      description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
    },
    {
      id: 3,
      img: picollo,
      name: 'Picollo',
      description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry '
    },
    {
      id: 4,
      img: danche,
      name: 'Danche',
      description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
    },
  ]

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Our Collection</h2>
      <div className={classes.wrapper} >
        {collection.map(item =>
          <Item
            key={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
           />
        )}
      </div>
    </section>
  );
}

export default Collection;