import React, {Fragment, useState} from 'react'

import classes from './Modal.module.css'
import useWindowDimensions from "../../../Utils/window"

const Modal = (props) => {
  const {height, width} = useWindowDimensions()

  const closeModal = () => {
    console.log('close modal')
  }

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={`${classes['modal']}`}>
        <header>
          <h2  className={`${classes['modal-title']}`}>
            {props.title}
          </h2>
        </header>
        <div className={`${classes['modal-wrapper']}`}>

          <div className={`${classes['modal-text']}`}>
            “I drink my coffee as <span>{props.preferences}</span>,
            with a <span>{props.bean} </span>
            type of bean. <span>{props.qty} </span>
            ground ala <span>{props.grind}</span>,
            sent to me <span>{props.deliveries}</span>.”
          </div>
          <div className={`${classes['modal-text__confirmation']}`}>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off.
            Subscription discount codes can also be redeemed at the checkout.
          </div>
          <footer className={`${classes['modal-footer']}`}>
            {width < 768 &&
              <button
                className={`${classes['modal-btn']}`}
                onClick={props.onConfirm}
              >
                Checkout - $14.00 / mo
              </button>
            }
            {width > 767 &&
              <Fragment>
                <span className={`${classes['modal-amount']}`}>$14.00 / mo</span>
                <button
                  className={`${classes['modal-btn']}`}
                  onClick={props.onConfirm}
                >
                  Checkout
                </button>
              </Fragment>
            }
          </footer>

        </div>
      </div>
    </div>
  )
}

export default Modal