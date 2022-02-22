import React from 'react';

import classes from './Summary.module.css'

const Summary = (props) => {
  console.log(props)

  return (
    <div className={`${classes['container']}`}>
      <h5>order summary</h5>

      {/*{props.picks.map(answer => (*/}
      {/*  <div>*/}
      {/*    {answer}*/}
      {/*  </div>*/}
      {/*))}*/}

      <div>
        "I drink my coffee as <span>{props.picks[0]}</span>,
        with a <span>{props.picks[1]} </span>
        type of bean. <span>{props.picks[2]} </span>
        ground ala <span>{props.picks[3]}</span>,
        sent to me <span>{props.picks[4]}</span>."
      </div>
    </div>
  );
}

export default Summary;

// “I drink my coffee as    Filter,   how
// with a                   Decaf     type
// type of bean.            250g      quantity
// ground ala             Cafetiére,  grind
// sent to me           Every Week.”  often