import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import classes from './Dropdown.module.css'

// TODO centrer le chevron avec le titre / question

const Dropdown = (props) => {
  console.log(props.isAnswered)
  const [isOpen, setIsOpen] = useState(true)

  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${classes['dropdown']}`}>
      <div className={`${classes['wrapper-btn']}`} onClick={toggleHandler}>
        <button type={"button"} className={`${classes['dropdown-btn']}`}>
          {props.question}
        </button>
        <span className={`${classes['dropdown-btn__icon']} ${isOpen && classes.rotate} `}>
          <FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/>
        </span>
      </div>

      <div style={{ display: isOpen ? '' : 'none' }} className={classes.container}>
        {props.children}
      </div>
    </div>
  );
}

export default Dropdown;