import React from 'react';

import classes from './Button.module.css'
import {Link} from "react-router-dom"

function Button() {
  return (
    <Link
      to={"/subscribe"}
      className={`${classes['btn']}`}
    >
      Create your plan
    </Link>
  );
}

export default Button;