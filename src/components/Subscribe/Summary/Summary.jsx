import React from 'react';

import classes from './Summary.module.css'

const Summary = (props) => {

  return (
    <div className={`${classes['container']}`}>
      <h5 className={`${classes['summary-title']}`}>order summary</h5>

      <div className={`${classes['summary-text']}`}>
        “I drink my coffee as <span>{props.preferences}</span>,
        with a <span>{props.bean} </span>
        type of bean. <span>{props.qty} </span>
        ground ala <span>{props.grind}</span>,
        sent to me <span>{props.deliveries}</span>.”
      </div>
    </div>
  );
}

export default Summary;
