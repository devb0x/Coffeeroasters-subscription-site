import React from 'react';

import classes from './why.module.css'

import coffeebean from '../../../assets/home/desktop/icon-coffee-bean.svg'
import gift from '../../../assets/home/desktop/icon-gift.svg'
import truck from '../../../assets/home/desktop/icon-truck.svg'

function Why() {
  const perks = [
    {
      id: 10,
      img: coffeebean,
      name: 'Best quality',
      description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
    },
    {
      id: 20,
      img: gift,
      name: 'Exclusive benefits',
      description: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
      id: 30,
      img: truck,
      name: 'Free shipping',
      description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    }
  ]

  return (
    <section className={classes.container}>
      <div className={classes.background} />

      <h3 className={classes.title}>
        Why choose us?
      </h3>
      <p className={classes.text}>
        A large part of our role is choosing which particular coffees will be featured  in our range. This means working
        closely with the best coffee growers to give you a more impactful experience on every level.
      </p>

      <div className={`${classes['perks-wrapper']}`}>
        {perks.map(el =>
          <div className={`${classes['perk-container']}`} key={el.id}>
            <img
              className={`${classes['perk-img']}`}
              src={`${el.img}`}
              alt={el.name}
            />
            <h4 className={`${classes['perk-title']}`}>
              {el.name}
            </h4>
            <p className={`${classes['perk-description']}`}>
              {el.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Why;
