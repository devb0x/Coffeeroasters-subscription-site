import React, {useState} from 'react'

import classes from './Dropdown.module.css'

const Dropdown = (props) => {

  const [isOpen, setIsOpen] = useState(true)

  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${classes['dropdown']}`}>
      <button type={"button"} onClick={toggleHandler} className={`${classes['dropdown-btn']}`}>
        {props.question}
        <span className={`${classes['dropdown-btn__icon']}`}>arrow icon</span>
      </button>
      <div style={{ display: isOpen ? 'none' : 'block' }}>
        {props.children}
      </div>
    </div>
  );
}

export default Dropdown;