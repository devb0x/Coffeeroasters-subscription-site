import React from "react"
import classes from "../../Subscribe/SubscribeForm/SubscribeForm/SubscribeForm.module.css"

const TextField = ({
   type,
   value,
   name,
   desc,
   id,
  onChange = () => {console.log('test')}
}) => {
  console.log(type)
  return (
    <div>

      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={(e) => onChange(e.target.value, e)}
        // onChange={(e) => changeHandler(e, question)}
        // onChange={(e) => setQuestions(prev => ({
        //   ...prev,
        //   isAnswered: true
        // }))}
      />

      <label htmlFor={value} className={`${classes['answer-label']}`}>
        <div className={`${classes['answer-title']}`}>
          {value}
        </div>
        <div className={`${classes['answer-text']}`}>
          {desc}
        </div>
      </label>

    </div>
  )
}

export default TextField