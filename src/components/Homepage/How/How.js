import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'

import Button from "../../UI/Button/Button"
import classes from './How.module.css'

const How = () => {
  const [altTheme, setAltTheme] = useState(false)

  const page = useLocation()

  useEffect(() => {
    setAltTheme(page.pathname === '/subscribe')
  }, [page])

  const steps = [
    {
      id: 21,
      number: '01',
      title: 'Pick your coffee',
      content: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair" +
        " prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
      id: 22,
      number: '02',
      title: 'Choose the frequency',
      content: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your" +
        " subscription with no commitment through our online portal."
    },
    {
      id: 23,
      number: '03',
      title: 'Receive and enjoy!',
      content: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning \n' +
        ' world-class coffees curated to provide a distinct tasting experience.'
    },
  ]

  return (
    <section className={altTheme ? `${classes['container-alt']}` : `${classes['container']}`}>
      <h3 className={altTheme ? `${classes['hidden']}` : `${classes['how-title']}`}>How it works</h3>

      <div className={altTheme ? `${classes['progress-alt']}` : `${classes['progress']}`}>
        {steps.map((step, index) =>
          <div key={index} className={`${classes['progress-step']}`}>
            <div className={`${classes['progress__circle']}`} />
            {index !== steps.length - 1 &&
              <div
                className={altTheme ? `${classes['progress__line-alt']}` : `${classes['progress__line']}`}
              />
            }
          </div>
        )}
      </div>

      <div className={altTheme ? `${classes['steps-wrapper-alt']}` : `${classes['steps-wrapper']}`}>
        {steps.map(step =>
          <div key={step.id} className={`${classes['step-wrapper']}`} >
            <div className={`${classes['step-number']}`}>
              {step.number}
            </div>
            <h4 className={altTheme ? `${classes['step-title-alt']}` : `${classes['step-title']}`}>
              {step.title}
            </h4>
            <p className={altTheme ? `${classes['step-content-alt']}` : `${classes['step-content']}`} >
              {step.content}
            </p>
          </div>
        )}
      </div>

      {!altTheme &&
        <Button />
      }
    </section>
  );
}

export default How;
