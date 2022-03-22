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
            <a href="/"
              className={ `${classes['link-img']} ${classes['fb']}` }
            />
          </li>
          <li>
            <a
              href="/"
              className={ `${classes['link-img']} ${classes['twitter']}` }
            />
          </li>
          <li>
            <a
              href="/"
              className={ `${classes['link-img']} ${classes['instagram']}` }
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
