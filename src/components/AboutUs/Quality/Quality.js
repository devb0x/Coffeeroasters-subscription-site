import React from 'react';

import classes from './Quality.module.css'

import qualityImg from '../../../assets/about/mobile/image-quality.jpg'
import tabletImg from "../../../assets/about/tablet/image-quality.jpg"
import desktopImg from "../../../assets/about/desktop/image-quality.jpg"

function Quality() {
  return (
    <section className={classes.container}>
      <div className={classes.background}/>
      <picture className={classes.picture}>
        <source media="(min-width:1440px)" srcSet={desktopImg} />
        <source media="(min-width:764px)" srcSet={tabletImg} />
        <img
          className={classes.image}
          src={qualityImg}
          alt="cup of coffee"
        />
      </picture>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Uncompromising quality</h2>
        <p className={classes.text}>
          Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our
          end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is
          tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that
          brewing is easy and enjoyable.
        </p>
      </div>
    </section>
  );
}

export default Quality;