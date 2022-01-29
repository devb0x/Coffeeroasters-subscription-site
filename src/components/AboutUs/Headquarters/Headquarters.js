import React from 'react';

import classes from './Headquarters.module.css'

import uk from '../../../assets/about/desktop/illustration-uk.svg'
import canada from '../../../assets/about/desktop/illustration-canada.svg'
import australia from '../../../assets/about/desktop/illustration-australia.svg'

function Headquarters() {
  const locations = [
    {
      id: 201,
      img: uk,
      country: 'United Kingdom',
      address: "68 Asfordby Rd",
      city: "Alcaston SY6 1YA",
      phone: "+44 1241 918425"
    },
    {
      id: 202,
      img: canada,
      country: 'Canada',
      address: "1528 Eglinton Avenue Toronto",
      city: "Ontario M4P 1A6",
      phone: "+1 416 485 2997"
    },
    {
      id: 203,
      img: australia,
      country: 'Australia',
      address: "36 Swanston Street Kewell",
      city: "Victoria",
      phone: "+61 4 9928 3629"
    }
  ]

  return (
    <section className={classes.headquarters}>
      <h2 className={classes.title}>
        Our headquarters
      </h2>
      {locations.map(el =>
        <div key={el.id} className={`${classes['location-card']}`}>
          <img src={el.img} alt={el.country} />
          <h3 className={`${classes['location-title']}`}>
            {el.country}
          </h3>
          <div className={`${classes['location-infos']}`}>
            {el.address} <br/>
            {el.city} <br/>
            {el.phone}
          </div>
        </div>
      )}
    </section>
  );
}

export default Headquarters;
