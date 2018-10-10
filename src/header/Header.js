import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/my-gifs">My GIF Box</Link>
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

const Header = ({ user }) => (
  <header className="main-header">
    <img className='logo' src='https://i.imgur.com/fImhlEo.png'/>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
