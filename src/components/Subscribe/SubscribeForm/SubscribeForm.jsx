import React, {useEffect, useRef, useState} from 'react'

import Dropdown from "../../UI/Dropdown/Dropdown"
import Summary from "../Summary/Summary"
import Modal from "../../UI/Modal/Modal"

import classes from './SubscribeForm.module.css'

const SubscribeForm = () => {

  const [questions, setQuestions] = useState([
    {
      id: 91,
      step: {
        number: '01',
        text: 'Preferences'
      },
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
      step: {
        number: '02',
        text: 'Bean type'
      },
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
      step: {
        number: '03',
        text: 'Quantity'
      },
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
      step: {
        number: '04',
        text: 'Grind Option'
      },
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
      step: {
        number: '05',
        text: 'Deliveries'
      },
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

  const [count, setCount] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const createBtnRef = useRef()

  const [preferences, setPreferences] = useState('_____')
  const [beanType, setBeanType] = useState('_____')
  const [quantity, setQuantity] = useState('_____')
  const [grindOption, setGrindOption] = useState('_____')
  const [deliveries, setDeliveries] = useState('_____')

  const changeHandler = (val, questAnswered) => {
    switch(questAnswered.id) {
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

    setQuestions((questions) => {
      return questions.map((question) => {
        if (questAnswered.id === question.id) {
          return {
            ...question,
            isAnswered: true,
          }
        }
        return question
      })
    })

    checkCount()
  }

  const checkCount = () => {
    let scopedCount = 1

    return questions.map((question) => {
      if (question.isAnswered === true) {
        scopedCount++
        return setCount(scopedCount)
      }
      return scopedCount
    })
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (count >= questions.length) {
      setBtnDisabled(false)
    }
  }, [questions.length, count])

  return (
    <section className={`${classes['section']}`}>

      <div className={`${classes['form-steps-wrapper']}`}>
        {questions.map((question, index) => (
          <div
            className={question.isAnswered ?
              `${classes['form-step']} ${classes['form-step__answered']}` :
              `${classes['form-step']}`
            }
            key={index}
          >
            <span>{question.step.number}</span>{question.step.text}
          </div>
          ))}
      </div>

      <form onSubmit={submitHandler} className={`${classes['form']}`}>
        {questions.map(question => (
          <Dropdown question={question.question} isAnswered={question.isAnswered} key={question.id}>

            {question.answers.map(answer => (
              <div className={`${classes['answers-wrapper']}`} key={answer.title} >
                <input className={`${classes['form-input']}`}
                  type="radio"
                  value={answer.title}
                  name={question.question}
                  id={answer.text}
                  onChange={(e) => changeHandler(e.target.value, question)}
                />

                <label htmlFor={answer.text} className={`${classes['answer-label']}`} >
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
          ref={createBtnRef}
          type={"submit"}
          className={`${classes['btn']}`}
          onClick={submitHandler}
          disabled={btnDisabled}
        >
          Create my plan!
        </button>

      {showModal &&
        <Modal
          title={"order summary"}
          preferences={preferences}
          bean={beanType}
          qty={quantity}
          grind={grindOption}
          deliveries={deliveries}
          onConfirm={closeModal}
        />
      }

      </form>

    </section>
  )

}

export default SubscribeForm
