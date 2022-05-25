import React from 'react';

import classes from './Footer.module.css'

import coffeeroastersLogo from '../../assets/shared/desktop/logo-white.svg'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className={classes.footer}>
      <img
        className={`${classes['footer-logo']}`}
        src={`${coffeeroastersLogo}`}
        alt="coffeeroasters"/>
      <div className={`${classes['links-one']}`}>
        <ul className={`${classes['links-one__list']}`}>
          <li className={`${classes['links-one__list-item']}`}>
            <Link to="/homepage" className={classes.link} >
              home
            </Link>
          </li>
          <li className={`${classes['links-one__list-item']}`}>
            <Link to="/about-us" className={classes.link} >
              about us
            </Link>
          </li>
          <li className={`${classes['links-one__list-item']}`}>
            <Link to="/subscribe" className={classes.link} >
              create your plan
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${classes['links-two']}`}>
        <ul className={`${classes['links-two__list']}`}>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank" rel="noreferrer"
              className={ `${classes['link-img']} ${classes['fb']}` }
            >
              <p className={`${classes['visually-hidden']}`}>facebook</p>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank" rel="noreferrer"
              className={ `${classes['link-img']} ${classes['twitter']}` }
            >
              <p className={`${classes['visually-hidden']}`}>twitter</p>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank" rel="noreferrer"
              className={ `${classes['link-img']} ${classes['instagram']}` }
            >
              <p className={`${classes['visually-hidden']}`}>instagram</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
