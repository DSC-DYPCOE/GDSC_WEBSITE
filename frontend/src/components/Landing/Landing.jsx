import React from 'react'
import classes from './Landing.module.css'
import Navbar from '../common/Navbar/Navbar'
import Footer from '../common/Footer/Footer'
import Hero from './Hero/Hero'
const Landing = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Landing