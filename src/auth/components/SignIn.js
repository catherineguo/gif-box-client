import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => history.push('/gif-box-client/my-gifs'))
      .catch(() => flash(messages.signInFailure, 'alert alert-danger'))
  }

  render () {
    const { email, password } = this.state

    return (
      <form className='auth-form' onSubmit={this.signIn}>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <p>Need to create an account? <Link to='/gif-box-client/sign-up'>Sign up</Link></p>
        <button className='btn btn-secondary' type="submit">Sign In</button>
      </form>
    )
  }
}

export default withRouter(SignIn)
