// import React, {Fragment, useState} from 'react';
//
// import classes from './Dropdown.module.css'
//
// const Dropdown = (props) => {
//
//   const [answers, setAnswers] = useState([])
//   const [selectedOptions, setSelectedOptions] = useState([])
//
//   const selectHandler = (e) => {
//     // console.log(e.target.htmlFor)
//     // We have pointer-events set to none for .answer-wrapper > *
//     // So we are only targeting the label
//     let parent = e.target.parentNode
//     // console.log(e.target.previousSibling.firstChild.innerText)
//     let labels = parent.getElementsByTagName("label") // les 3 labels
//
//     // let question = e.target.htmlFor
//     // let qAlreadyPicked = []
//
//     for (let label of labels) {
//       label.style.outline = "unset"
//       label.style.backgroundColor = "#F4F1EB"
//       label.style.color = "#2C343E"
//     }
//
//     e.target.style.color = "white"
//     e.target.style.backgroundColor = "#0E8784FF"
//
//     if (e.target.tagName === 'LABEL') {
//       e.target.lastChild.checked = true
//     }
//     if (e.target.tagName === 'DIV') {
//       e.target.nextSibling.nextSibling.checked = true
//     }
//     if (e.target.tagName === 'P') {
//       e.target.nextSibling.checked = true
//     }
//
//     // styling done, now set state
//
//     // console.log(e.target.firstChild.getAttribute("value"))
//     // answers.push(answerSelected)
//     // answers = [...new Set(answers)]
//     // console.log(answers)
//
//     let answerSelected = e.target.firstChild.getAttribute("value")
//     // setAnswers(e.target.firstChild.getAttribute("value"))
//
//     // console.log(answerSelected)
//     // setAnswers(answerSelected)
//
//     console.log(answers)
//
//     // props.onChange(answers)
//
//     console.log(selectedOptions)
//
//     selectHandler()
//
//
//     // return props.pick(setAnswers(answerSelected))
//
//     // return props.pick(answerSelected) TODO faire ca pr le form submit qd on a les 5 reponses
//
//   }
//
//   const newfunction = () => {
//     console.log('test')
//   }
//
//   return (
//     <div className={`${classes['question-wrapper']}`}>
//
//       <div className={`${classes['question-title-wrapper']}`} >
//         <div className={`${classes['question-title']}`}>
//           {props.question}
//         </div>
//         <div className={`${classes['question-arrow']}`}>
//           chevron
//         </div>
//       </div>
//
//       {props.answers.map((answer) => (
//
//         <label
//           htmlFor={props.question}
//           key={answer.title}
//           className={`${classes['answer-wrapper']}`}
//           // onClick={selectHandler}
//           // onChange={selectHandler}
//         >
//           <div
//             className={`${classes['answer-title']}`}
//             value={answer.title}
//           >
//             {answer.title}
//           </div>
//           <p className={`${classes['answer-text']}`}>
//             {answer.text}
//           </p>
//           <input
//             value={answer.title}
//             type="radio"
//             id={answer.title}
//             name={props.question}
//             className={`${classes['hidden']}`}
//             checked={selectHandler}
//             // onChange={(e) => setSelectedOptions(selectedOptions)}
//
//           />
//         </label>
//       ))}
//
//     </div>
//   );
// }
//
// export default Dropdown;
