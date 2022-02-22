import React, {Fragment, useEffect, useState} from 'react';
import Button from "../../../UI/Button/Button"
import Dropdown from "../../../UI/Dropdown/Dropdown"
import DropTest from "../../../UI/Dropdown/DropTest"
import Summary from "../../Summary/Summary"

import classes from './SubscribeForm.module.css'

const SubscribeForm = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [answersSelected, setAnswersSelected] = useState([])

  const questions = [
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
  ]


  const submitHandler = (e) => {
    e.preventDefault()

    let answers = []

    const userPicks = document.querySelectorAll('input[type="radio"]:checked')
    for (let i = 0; i < userPicks.length; i++) {
      answers.push(userPicks[i].value)
    }
    setAnswersSelected(answers)
    setIsSubmit(true)

    //TODO check answers length = 5, si oui => setIsSubmit(true)
    //     check le bug avec filter (qd on clic sur le 2nd on est scroll vers le haut)
  }

  const changeHandler = (e) => {
    console.log('picked')
    console.log(e.target.nextSibling)
    console.log(e.target.checked)
    if (e.target.checked) {
      e.target.nextSibling.style.color = '#fff'
      e.target.nextSibling.style.backgroundColor = '#0E8784'
    }

    // answer.isPicked = true
  }

  return (
    <section>
      <form onSubmit={submitHandler}>

        {questions.map(question => (
          <div key={question.id}>
            <div className={`${classes['question-title']}`} >
              {question.question}
            </div>

            {question.answers.map(answer => (
              <div className={`${classes['answers-wrapper']}`} key={answer.title}>
                <input
                  type="radio"
                  value={answer.title}
                  name={question.question}
                  id={answer.text}
                  onChange={changeHandler}
                />
                <label htmlFor={answer.text} >
                  <div className={`${classes['answer-title']}`}>
                    {answer.title}
                  </div>
                  <div className={`${classes['answer-text']}`}>
                    {answer.text}
                  </div>
                </label>
              </div>
            ))}
          </div>
        ))}

        {isSubmit &&
          <Summary picks={answersSelected}/>
        }

        <button className={`${classes['btn']}`} onClick={submitHandler}>Create my plan</button>
      </form>
    </section>
  );
}

export default SubscribeForm;


// TODO modif button component with props, check event submit
// <Button onClick={submitHandler} />
