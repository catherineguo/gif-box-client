import React from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.scss'

const unautheticatedBody = (
  <React.Fragment>
    <h1 className='title'>Welcome to GIF Box</h1>
    <p>A place to store your favorite GIFs
      <br />
      <Link to="/sign-up">Sign up</Link> or <Link to="/sign-in">sign in</Link> to get started!
    </p>
    <center><img className='welcome' src='https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif' /></center>
  </React.Fragment>
)

const LandingPage = ({ user }) => (
  <React.Fragment>
    { user ? null : unautheticatedBody }
  </React.Fragment>
)

export default LandingPage
