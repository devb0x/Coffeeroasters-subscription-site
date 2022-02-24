import React, {Fragment, useEffect, useState} from 'react';
import Button from "../../../UI/Button/Button"
import Dropdown from "../../../UI/Dropdown/Dropdown"
import DropTest from "../../../UI/Dropdown/DropTest"
import Summary from "../../Summary/Summary"

import classes from './SubscribeForm.module.css'

const SubscribeForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [answersSelected, setAnswersSelected] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

  const [questions, setQuestions] = useState([
    {
      id: 91,
      question: "How do you drink your coffee?",
      answers: [
        {
          title: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers",
          isPicked: false
        },
        {
          title: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60",
          isPicked: false
        },
        {
          title: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience",
          isPicked: false
        }
      ]
    },
    {
      id: 92,
      question: "What type of coffee?",
      answers: [
        {
          title: "Single Origin",
          text: "Distinct, high quality coffee from a specific family-owned farm",
          isPicked: false
        },
        {
          title: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed",
          isPicked: false
        },
        {
          title: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffees",
          isPicked: false
        }
      ]
    },
    {
      id: 93,
      question: "How much would you like?",
      answers: [
        {
          title: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
          isPicked: false
        },
        {
          title: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups.",
          isPicked: false
        },
        {
          title: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups.",
          isPicked: false
        }
      ]
    },
    {
      id: 94,
      question: "Want us to grind them?",
      answers: [
        {
          title: "Wholebean",
          text: "Best choice if you cherish the full sensory experience",
          isPicked: false
        },
        {
          title: "Filter",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress",
          isPicked: false
        },
        {
          title: "Cafetiere",
          text: "Course ground beans specially suited for french press coffee",
          isPicked: false
        }
      ]
    },
    {
      id: 95,
      question: "How often should we deliver?",
      answers: [
        {
          title: "Every week",
          text: "$7.20 per shipment. Includes free first-class shipping.",
          isPicked: false
        },
        {
          title: "Every 2 weeks",
          text: "$9.60 per shipment. Includes free priority shipping.",
          isPicked: false
        },
        {
          title: "Every month",
          text: "$12.00 per shipment. Includes free priority shipping.",
          isPicked: false
        }
      ]
    }
  ], [])


  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    let answers = []

    const userPicks = document.querySelectorAll('input[type="radio"]:checked')
    for (let i = 0; i < userPicks.length; i++) {
      answers.push(userPicks[i].value)
    }

    if (answers.length !== questions.length) {
      console.log('error form')
      return
    }

    setAnswersSelected(answers)
    setIsSubmit(true)
  }

  // const eventTest = (e) => {
  //   console.log('test event')
  //   console.log(e.target.checked)
  //
  //   const target = e.target.checked
  //
  //   console.log(target)
  //   // e.target.checked
  // }

  return (
    <section>
      <form onSubmit={submitHandler} className={`${classes['form']}`}>

        {questions.map(question => (
            <Dropdown question={question.question} key={question.id}>

              {question.answers.map(answer => (
                <div className={`${classes['answers-wrapper']}`} key={answer.title}>
                  <input
                    type="radio"
                    value={answer.title}
                    name={question.question}
                    id={answer.text}
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

        {isSubmit &&
          <Summary picks={answersSelected}/>
        }

        <button
          type={"submit"}
          className={`${classes['btn']}`}
          onClick={submitHandler}
        >
          Create my plan
        </button>
      </form>
    </section>
  );
}

export default SubscribeForm;


// TODO modif button component with props, check event submit
// <Button onClick={submitHandler} />
