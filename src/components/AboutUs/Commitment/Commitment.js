import React from 'react';

import commitmentImg from '../../../assets/about/mobile/image-commitment.jpg'
import tabletImg from '../../../assets/about/tablet/image-commitment.jpg'
import desktopImg from '../../../assets/about/desktop/image-commitment.jpg'

import classes from './Commitment.module.css'

function Commitment() {

  const data = {
    title: "Our commitment",
    text: "We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for" +
      "you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific" +
      "lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities" +
      "in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers" +
      "through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and" +
      "invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles" +
      "distinctive to their native growing region."
    }

  return (
    <section className={classes.commitment}>
      <picture className={`${classes['commitment-picture']}`}>
        <source media="(min-width:1440px)" srcSet={desktopImg} />
        <source media="(min-width:764px)" srcSet={tabletImg} />
        <img
          className={`${classes['commitment-img']}`}
          src={commitmentImg}
          alt="man making a good coffee"
        />
      </picture>
      <div className={`${classes['commitment-wrapper']}`}>
        <h2 className={`${classes['commitment-title']}`}>{data.title}</h2>
        <p className={`${classes['commitment-text']}`}>{data.text}</p>
      </div>
    </section>
  );
}

export default Commitment;