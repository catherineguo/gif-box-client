import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/gif-box-client/search">Search GIFs</Link>
    <Link to="/gif-box-client/my-gifs">My GIF Box</Link>
    <Link to="/gif-box-client/change-password">Change Password</Link>
    <Link to="/gif-box-client/sign-out"><button className='btn btn-secondary'>Sign Out</button></Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/gif-box-client">Home</Link>
    <Link to="/gif-box-client/sign-up">Sign Up</Link>
    <Link to="/gif-box-client/sign-in"><button className='btn btn-secondary'>Sign In</button></Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <img className='logo' src='https://i.imgur.com/fImhlEo.png'/>
    <h2 className='brand-name'>GIF Box</h2>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
