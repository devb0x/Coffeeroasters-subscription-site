import React from 'react';

import Button from "../../UI/Button/Button"
import classes from './heroBanner.module.css'

function HeroBanner() {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={`${classes['hero-title']}`}>
          Great coffee made simple.
        </h1>
        <div className={`${classes['hero-text']}`}>
          Start your mornings with the world’s best coffees. Try our expertly curated artisan
          coffees from our best roasters delivered directly to your door, at your schedule.
        </div>
        <Button />
      </div>
    </section>
  );
}

export default HeroBanner;