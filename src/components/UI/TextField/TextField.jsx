import React, {useState} from "react"
import classes from "../../Subscribe/SubscribeForm/SubscribeForm.module.css"


const TextField = ({type= 'text', id, label, value, onchange = () => {} }) => {
  // const id = label
  //   .toLowerCase()
  //   .split('')
  //   .map((word) => word.replace(/[^a-z]+/g, ''))
  //   .join('')

  return (
    <div>
      <input
        type="radio"
        // id={answer.text}
        id={value}
        value={value}
        // onChange={(e) => onchange(e.target.value, e)}
      />

      <label htmlFor={value}>
        <div>
          {value}
        </div>
        <div>
          {label}
        </div>
      </label>

    </div>
  )
}

export default TextField