import React from 'react';

import classes from './item.module.css'

function Item(props) {

  return (
    <div className={classes.item}>
      <img
        className={`${classes['item-img']}`}
        src={`${props.img}`}
        alt={props.name}
      />
      <h3 className={`${classes['item-title']}`}>
        {props.name}
      </h3>
      <p className={`${classes['item-description']}`}>
        {props.description}
      </p>
    </div>
  );
}

export default Item;