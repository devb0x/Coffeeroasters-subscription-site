import React from 'react';
import Button from "../../../UI/Button/Button"
import Dropdown from "../../../UI/Dropdown/Dropdown"
import DropTest from "../../../UI/Dropdown/DropTest"

const SubscribeForm = () => {
  const questions = [
    {
      id: 91,
      question: "How do you drink your coffee?",
      answers: [
        {
          title: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers"
        },
        {
          title: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60"
        },
        {
          title: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience"
        }
      ]
    },
    {
      id: 92,
      question: "What type of coffee?",
      answers: [
        {
          title: "Single Origin",
          text: "Distinct, high quality coffee from a specific family-owned farm"
        },
        {
          title: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed"
        },
        {
          title: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffees"
        }
      ]
    },
    {
      id: 93,
      question: "How much would you like?",
      answers: [
        {
          title: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups."
        },
        {
          title: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups."
        },
        {
          title: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups."
        }
      ]
    },
    {
      id: 94,
      question: "Want us to grind them?",
      answers: [
        {
          title: "Wholebean",
          text: "Best choice if you cherish the full sensory experience"
        },
        {
          title: "Filter",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress"
        },
        {
          title: "Cafetiere",
          text: "Course ground beans specially suited for french press coffee"
        }
      ]
    },
    {
      id: 95,
      question: "How often should we deliver?",
      answers: [
        {
          title: "Every week",
          text: "$7.20 per shipment. Includes free first-class shipping."
        },
        {
          title: "Every 2 weeks",
          text: "$9.60 per shipment. Includes free priority shipping."
        },
        {
          title: "Every month",
          text: "$12.00 per shipment. Includes free priority shipping."
        }
      ]
    }
  ]

  const submitHandler = (event) => {
    event.preventDefault()
    console.log("form submitted")
  }

  return (
    <section>
      <form onSubmit={submitHandler}>

        {/*question #1*/}
        {questions.map(el => (
          <Dropdown
            key={el.id}
            question={el.question}
            answers={el.answers}
          />
        ))}

        {/*<DropTest />*/}

        <button onClick={submitHandler}>Create my plan</button>
      </form>
    </section>
  );
}

export default SubscribeForm;


// TODO modif button component with props, check event submit
// <Button onClick={submitHandler} />
