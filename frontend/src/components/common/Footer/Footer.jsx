import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo_container}>
        <img src={require("../../assets/footer_logo.png")}/>
      </div>
      <div className={classes.list_container}>
        <ul>
          <h2>Programs</h2>
          <li>Women Techmakers</li>
          <li>Google Developer Experts</li>
          <li>Google Developer Groups</li>
        </ul>
        <ul>
          <h2>Developers</h2>
          <li>Firebase Console</li>
          <li>Google Cloud Platform</li>
          <li>Action on Google</li>
        </ul>
        <ul>
          <h2>Contribute</h2>
          <li>File a Bug</li>
          <li>View Source</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer