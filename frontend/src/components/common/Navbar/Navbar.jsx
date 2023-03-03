import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logoContainer}>
          <img src={require("F:/GDSC Website/frontend/src/components/assets/Logo.png")} alt="DYP LOGO"></img>
        </div>
        <ul>
          <li><a href="#" className={classes.active}>Home</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Workshops</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div className={classes.darkDiv}>
          <button className={classes.darkBtn}>Dark Mode</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar