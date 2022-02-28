import React, {useEffect} from 'react';

import classes from './Summary.module.css'

const Summary = (props) => {

  useEffect(() => {

  }, [props])
  // console.log(props)
  // console.log(props.picks[2])
  for (let i=0; i < props.picks.length; i++) {
    if (props.picks[i] === undefined) {
      props.picks[i] = '_ _ _ _ _'
    }
  }

  return (
    <div className={`${classes['container']}`}>
      <h5>order summary</h5>

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
