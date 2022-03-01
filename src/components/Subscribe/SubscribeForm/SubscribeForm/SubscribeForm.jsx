import React, {Fragment, useEffect, useReducer, useState} from 'react';
import Button from "../../../UI/Button/Button"
import Dropdown from "../../../UI/Dropdown/Dropdown"
import DropTest from "../../../UI/Dropdown/DropTest"
import Summary from "../../Summary/Summary"

import classes from './SubscribeForm.module.css'
import TextField from "../../../UI/TextField/TextField"

const SubscribeForm = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  const [questions, setQuestions] = useState([
    {
      id: 91,
      question: "How do you drink your coffee?",
      answers: [
        {
          title: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers",
          isSelected: false
        },
        {
          title: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60",
          isSelected: false
        },
        {
          title: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience",
          isSelected: false
        }
      ],
      isAnswered: false
    },
    {
      id: 92,
      question: "What type of coffee?",
      answers: [
        {
          title: "Single Origin",
          text: "Distinct, high quality coffee from a specific family-owned farm",
          isSelected: false
        },
        {
          title: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed",
          isSelected: false
        },
        {
          title: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffees",
          isSelected: false
        }
      ],
      isAnswered: false
    },
    {
      id: 93,
      question: "How much would you like?",
      answers: [
        {
          title: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
          isSelected: false
        },
        {
          title: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups.",
          isSelected: false
        },
        {
          title: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups.",
          isSelected: false
        }
      ],
      isAnswered: false
    },
    {
      id: 94,
      question: "Want us to grind them?",
      answers: [
        {
          title: "Wholebean",
          text: "Best choice if you cherish the full sensory experience",
          isSelected: false
        },
        {
          title: "Filter",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress",
          isSelected: false
        },
        {
          title: "Cafetiére",
          text: "Course ground beans specially suited for french press coffee",
          isSelected: false
        }
      ],
      isAnswered: false
    },
    {
      id: 95,
      question: "How often should we deliver?",
      answers: [
        {
          title: "Every week",
          text: "$7.20 per shipment. Includes free first-class shipping.",
          isSelected: false
        },
        {
          title: "Every 2 weeks",
          text: "$9.60 per shipment. Includes free priority shipping.",
          isSelected: false
        },
        {
          title: "Every month",
          text: "$12.00 per shipment. Includes free priority shipping.",
          isSelected: false
        }
      ],
      isAnswered: false
    }
  ])


  // const [answers, setAnswers] = useState([
  //   {
  //     id: 91,
  //     // value: '_____'
  //   },
  //   {
  //     id: 92,
  //     // value: '_____'
  //   },
  //   {
  //     id: 93,
  //     // value: '_____'
  //   },
  //   {
  //     id: 94,
  //     // value: '_____'
  //   },
  //   {
  //     id: 95,
  //     // value: '_____'
  //   },
  // ])


  const [preferences, setPreferences] = useState('_____')
  const [beanType, setBeanType] = useState('_____')
  const [quantity, setQuantity] = useState('_____')
  const [grindOption, setGrindOption] = useState('_____')
  const [deliveries, setDeliveries] = useState('_____')

  const changeHandler = (val, question) => {
    console.log(question)

    switch(question.id) {
      case 91:
        setPreferences(val)
        break
      case 92:
        setBeanType(val)
        break
      case 93:
        setQuantity(val)
        break
      case 94:
        setGrindOption(val)
        break
      case 95:
        setDeliveries(val)
        break
      default:
        break
    }

    console.log(questions)
  }


    // console.log(questionSelected.id)
    // console.log(selectedQuestion.answers)
    // console.log(selectedQuestion)
    // console.log(selectedQuestion.answers)

    // plus besoin
    // setQuestions((questions) => {
    //   questions.map((question) => {
    //     if (questionSelected.id === question.id) {
    //       console.log(question.answers)
    //       return {
    //         ...question,
    //         isAnswered: true,
    //         answers: {isSelected: true}
    //       }
    //     }
    //     return question
    //   })
    //   return questions
    // })
    // fin plus besoin
  // const changeHandler = (e, question, answers) => {
  //   // console.log(e.value)
  //   // console.log(question)
  //   // console.log(question.id)
  //
  //   // console.log(e.id) // nop
  //   const value = e.value
  //
  //   setAnswers((answers) => (
  //     answers.map((answer, index) => {
  //       if (question.id === answer.id) {
  //         console.log('modif ici')
  //         console.log(answer)
  //         return {
  //           // ...answers,
  //           // value: e.value
  //           // answer.id,
  //           // ...answer,
  //           value
  //         }
  //         // setAnswers(answer)
  //       }
  //     return answers
  //     })
  //   ))
  //
  //   // console.log(answers)
  //   // return answers
  //
  //   // let indexOfPick = question.map(answers)
  // }

  const submitHandler = (e) => {
    e.preventDefault()
    console.warn(questions[4])

    // let answers = [
    //   '_____',
    //   '_____',
    //   '_____',
    //   '_____',
    //   '_____'
    // ]
    //
    // const userPicks = document.querySelectorAll('input[type="radio"]:checked')
    // for (let i = 0; i < userPicks.length; i++) {
    //   // answers.push(userPicks[i].value)
    //   // answers = userPicks[i].value
    //   setAnswers(answers[i] = userPicks[i].value)
    //   console.log(answers)
    //   console.log(answers[i])
    // }

    // if (answers.length !== questions.length) {
    //   console.log('error form')
    //   return
    // }

    // setAnswersSelected(answers)
    setIsSubmit(true)
  }

  return (
    <section className={`${classes['section']}`}>

      <div className={`${classes['form-steps-wrapper']}`}>
        <div className={`${classes['form-step']}`}>
          <span>01</span> Preferences
        </div>
        <div className={`${classes['form-step']}`}>
          <span>02</span> Bean Type
        </div>
        <div className={`${classes['form-step']}`}>
          <span>03</span> Quantity
        </div>
        <div className={`${classes['form-step']}`}>
          <span>04</span> Grind Option
        </div>
        <div className={`${classes['form-step']}`}>
          <span>05</span> Deliveries
        </div>
      </div>

      <form onSubmit={submitHandler} className={`${classes['form']}`}>
        {questions.map(question => (
          <Dropdown question={question.question} isAnswered={question.isAnswered} key={question.id}>

            {question.answers.map(answer => (
              <div className={`${classes['answers-wrapper']}`} key={answer.title} >
                <input
                  type="radio"
                  value={answer.title}
                  name={question.question}
                  id={answer.text}
                  onChange={(e) => changeHandler(e.target.value, question)}
                />

                <label htmlFor={answer.text} className={`${classes['answer-label']}`}>
                  <div className={`${classes['answer-title']}`}>
                    {answer.title}
                  </div>
                  <div className={`${classes['answer-text']}`}>
                    {answer.text}
                  </div>
                </label>
              </div>
            ))}

          </Dropdown>
        ))}

        <Summary
          preferences={preferences}
          bean={beanType}
          qty={quantity}
          grind={grindOption}
          deliveries={deliveries}
        />

        <button
          type={"submit"}
          className={`${classes['btn']}`}
          onClick={submitHandler}
        >
          Create my plan!
        </button>
      </form>
    </section>
  )
}

export default SubscribeForm;



// TODO modif button component with props, check event submit
// <Button onClick={submitHandler} />