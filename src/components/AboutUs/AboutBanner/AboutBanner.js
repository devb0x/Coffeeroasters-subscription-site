import React from 'react';

import classes from './AboutBanner.module.css'

function AboutBanner() {
  return (
    <section className={`${classes['about-banner']}`}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>About Us</h1>
        <p className={classes.text}>
          Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the
          world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
        </p>
      </div>
    </section>
  );
}

export default AboutBanner;
