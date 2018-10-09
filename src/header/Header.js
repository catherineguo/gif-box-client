import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/my-gifs">My Gifs</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out"><button className='btn btn-secondary'>Sign Out</button></Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in"><button className='btn btn-secondary'>Sign In</button></Link>
  </React.Fragment>
)

const authenticatedBody = (
  <div></div>
)

const unautheticatedBody = (
  <React.Fragment>
    <h1 className='title'>Welcome to GIF Box</h1>
    <p>Save your favorite gifs in your account!
      <br />
      <Link to="/sign-up">Sign up</Link> or <Link to="/sign-in">sign in</Link> to get started!
      <br />
      I love exclamation points!!!
    </p>
  </React.Fragment>
)

const Header = ({ user }) => (
  <React.Fragment>
    <header className="main-header">
      <img src='https://i.imgur.com/fImhlEo.png'/>
      <nav>
        { user && <span>Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </nav>
    </header>
    { user ? authenticatedBody : unautheticatedBody }
  </React.Fragment>
)

export default Header
