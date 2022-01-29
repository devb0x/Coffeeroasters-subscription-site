import React, {Fragment, useState} from 'react';

import classes from './Dropdown.module.css'

const Dropdown = (props) => {
  // console.log(props.question)
  // console.log(props.answers[0].title)
  // console.log(props.answers[1].title)
  // console.log(props.answers[2].title)
  console.warn(props.question)


  const testClic = (e) => {
    console.log('clicked')
    console.log(e.target.nextSibling.checked = true)
  }

  return (
    <div className={`${classes['question-wrapper']}`}>

      {/*<div className={`${classes['question-title-wrapper']}`}>*/}
      {/*  <div className={`${classes['question-title']}`}>*/}
      {/*    {props.question}*/}
      {/*  </div>*/}
      {/*  <div className={`${classes['question-arrow']}`}>*/}
      {/*    chevron*/}
      {/*  </div>*/}
      {/*</div>*/}


      {/* don't touch top */}
      {/* from here answers */}

      {/*{props.answers.map(el => (*/}

      <div className={`${classes['question-title-wrapper']}`}>
        <div className={`${classes['question-title']}`}>
          {props.question}
        </div>
        <div className={`${classes['question-arrow']}`}>
          chevron
        </div>
      </div>

      {props.answers.map((answer, index) => (

        <label htmlFor={props.question} key={answer.title} className={`${classes['xxx']}`} onClick={testClic}>
          <div className={`${classes['answer-title']}`}>
            {answer.title}
          </div>
          <p className={`${classes['answer-text']}`}>
            {answer.text}
          </p>
          <input
            type="radio"
            id={answer.title}
            name={props.question}
            // checked={true}
            // className={`${classes['hidden']}`}
          />
        </label>
      ))}



      {/*<label htmlFor={props.answers[0].title}>*/}
      {/*  <input type="radio" name={props.answers[0].title} id={props.answers[0].title} />*/}
      {/*  <div className={`${classes['answer-title']}`}>*/}
      {/*    {props.answers[0].title}*/}
      {/*  </div>*/}
      {/*  <p className={`${classes['answer-text']}`}>*/}
      {/*    {props.answers[0].text}*/}
      {/*  </p>*/}
      {/*</label>*/}

      {/*<label htmlFor={props.answers[1].title}>*/}
      {/*  <input type="radio" name={props.answers[0].title} id={props.answers[1].title}/>*/}
      {/*  <div className={`${classes['answer-title']}`}>*/}
      {/*    {props.answers[1].title}*/}
      {/*  </div>*/}
      {/*  <p className={`${classes['answer-text']}`}>*/}
      {/*    {props.answers[1].text}*/}
      {/*  </p>*/}
      {/*</label>*/}

      {/*<label htmlFor={props.answers[2].title}>*/}
      {/*  <input type="radio" name={props.answers[0].title} id={props.answers[2].title} />*/}
      {/*  <div className={`${classes['answer-title']}`}>*/}
      {/*    {props.answers[2].title}*/}
      {/*  </div>*/}
      {/*  <p className={`${classes['answer-text']}`}>*/}
      {/*    {props.answers[2].text}*/}
      {/*  </p>*/}
      {/*</label>*/}

    </div>
  );
}

export default Dropdown;

// {props.answers.map(el => (
//   <div key={el.title} className={`${classes['answer-wrapper']}`}>
//     <label htmlFor="" >
//       <input
//         type="radio"
//         value={el.title}
//         name={props.id}
//         className={classes.hidden}
//       />
//       <div className={`${classes['answer-title']}`}>
//         {el.title}
//       </div>
//       <p className={`${classes['answer-text']}`}>
//         {el.text}
//       </p>
//     </label>
//   </div>
// ))}


// {props.answers.map(el => (
//   <Fragment key={el.title}>
//     <input type="radio" id={el.title} name={props.id} />
//     <label htmlFor={el.title}>{el.title}</label>
//   </Fragment>
// ))}




// CA C EST BON LOLE

// <label htmlFor={props.answers[0].title}>
//   <input type="radio" name={props.answers[0].title} id={props.answers[0].title} />
//   <div className={`${classes['answer-title']}`}>
//     {props.answers[0].title}
//   </div>
//   <p className={`${classes['answer-text']}`}>
//     {props.answers[0].text}
//   </p>
// </label>
//
// <label htmlFor={props.answers[1].title}>
//   <input type="radio" name={props.answers[0].title} id={props.answers[1].title}/>
//   <div className={`${classes['answer-title']}`}>
//     {props.answers[1].title}
//   </div>
//   <p className={`${classes['answer-text']}`}>
//     {props.answers[1].text}
//   </p>
// </label>
//
// <label htmlFor={props.answers[2].title}>
//   <input type="radio" name={props.answers[0].title} id={props.answers[2].title} />
//   <div className={`${classes['answer-title']}`}>
//     {props.answers[2].title}
//   </div>
//   <p className={`${classes['answer-text']}`}>
//     {props.answers[2].text}
//   </p>
// </label>
