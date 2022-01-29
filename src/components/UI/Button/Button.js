import React from 'react';

import classes from './Button.module.css'
import {Link, NavLink} from "react-router-dom"

function Button(props) {
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