import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import lightLogo from '../../assets/nav_logo_light.png'
import darkLogo from '../../assets/nav_logo_dark.png'
import { ThemeContext } from '../../../App'


const Navbar = () => {
  const [icon, setIcon] = useState("moon")
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    if (theme.theme === "light") {
      setIcon("sun");
    }
    else if (theme.theme === "dark") {
      setIcon("moon");
    }
    theme.toggleTheme();
  }

  const [isOpen, setisOpen] = useState(false)
  const collapse = () => {
    if (isOpen) {
      setisOpen(false)
    }
    else {
      setisOpen(true)
    }
  }
  return (
    <>
      <nav className={`${classes.nav} ${theme.theme === "light" ? classes.light : classes.dark}`}> {/* class should change as classes.light to classes.dark */}
        <div className={classes.logoContainer}>
          <img src={theme.theme === "light" ? lightLogo : darkLogo} alt="DYP LOGO"></img>
        </div>
        <div className={`${classes.menu} ${isOpen ? classes.isOpen : ''}`}>
          <ul className={classes.list}>
            <li><NavLink to={"/"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-home'} ${classes.icons}`}></i>Home</NavLink></li>
            <li><NavLink to={"/overview"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-regular fa-eye'} ${classes.icons}`}></i>Overview</NavLink></li>
            <li><NavLink to={"/projects"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-diagram-project'} ${classes.icons}`}></i>Projects</NavLink></li>
            <li><NavLink to={"/technologies"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-home'} ${classes.icons}`}></i>Technologies</NavLink></li>
            <li><NavLink to={"/workshops"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-home'} ${classes.icons}`}></i>Workshops</NavLink></li>
            <li><NavLink to={"/learn"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-chalkboard'} ${classes.icons}`}></i>Learn</NavLink></li>
            <li><NavLink to={"/team"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-people-group'} ${classes.icons}`}></i>Team</NavLink></li>
            <li><NavLink to={"/about"} className={({ isActive }) => (isActive ? classes.active : '')}><i className={`${'fa-solid fa-book'} ${classes.icons}`}></i>About</NavLink></li>
          </ul>
          <button className={classes.darkBtn} onClick={changeTheme}><i className={`fa-solid fa-${icon}`}></i></button>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.bars} onClick={collapse}>
            <span className={classes.bars}>
              <span className={`${classes.bar} ${isOpen ? classes.cross : ''}`}></span>
              <span className={`${classes.bar} ${isOpen ? classes.cross : ''}`}></span>
              <span className={`${classes.bar} ${isOpen ? classes.cross : ''}`}></span>
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar