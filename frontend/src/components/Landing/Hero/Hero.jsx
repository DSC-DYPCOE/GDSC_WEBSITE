import React, {useContext} from 'react'
import classes from './Hero.module.css'
import { ThemeContext } from '../../../App'


const Hero = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${classes.container} ${theme.theme === 'light' ? classes.light : classes.dark}`}>Hero</div>
  )
}

export default Hero