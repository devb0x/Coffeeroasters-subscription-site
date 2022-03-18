import React, {Fragment, useEffect, useState} from "react"

import useWindowDimensions from "../../Utils/window"

import logo from '../../assets/shared/desktop/logo.svg'
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg'
import close from '../../assets/shared/mobile/icon-close.svg'
import classes from "./Navbar.module.css"
import {Link, useLocation, useParams} from "react-router-dom"

const Navbar = () => {
  const {height, width} = useWindowDimensions()
  const [isOpen, setIsOpen] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  // console.log('rerender')
  // console.log(pathname)

  useEffect(() => {
    setIsOpen(false)
    setPathname(window.location.pathname)
  }, [width, pathname])


  const displayNavMobileHandler = () => {
    setIsOpen(!isOpen)
  }

  // console.log(width)
  // console.log(height)

  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="coffeeroasters logo"/>

      {!isOpen &&
        <button
          type="button"
          onClick={displayNavMobileHandler}
          className={classes.hamburger}>
          <img src={hamburger} alt="hamburger icon"/>
        </button>
      }

      {isOpen &&
        <Fragment>
          <button
            type="button"
            onClick={displayNavMobileHandler}
          >
            <img src={close} alt="close cross icon"/>
          </button>
          <nav className={`${classes['nav-mobile']}`}>
            <ul>
              <li>
                <Link to="/homepage" className={classes.link} >Home</Link>
              </li>
              <li>
                <Link to="/about-us" className={classes.link} >About Us</Link>
              </li>
              <li>
                <Link to="/subscribe" className={classes.link} >Create Your Plan</Link>
              </li>
            </ul>
          </nav>
        </Fragment>
      }

      {width > 767 &&
        <nav className={`${classes['nav']}`}>
          <ul>
            <li>
              <Link to="/homepage" className={classes.link} >Home</Link>
            </li>
            <li>
              <Link to="/about-us" className={classes.link} >About Us</Link>
            </li>
            <li>
              <Link to="/subscribe" className={classes.link} >Create Your Plan</Link>
            </li>
          </ul>
        </nav>
      }

    </nav>
  );
};

export default Navbar;