import React from 'react';

import classes from './SubscribeBanner.module.css'

const SubscribeBanner = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Create plan</h1>
      <p className={classes.text}>
        Build a subscription plan that best fits your needs. We offer an assortment of the best
        artisan coffees from around the globe delivered fresh to your door.
      </p>
    </section>
  );
}

export default SubscribeBanner;
