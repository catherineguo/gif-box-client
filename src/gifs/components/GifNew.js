import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import apiUrl from '../../apiConfig.js'
import { handleErrors, newGif } from '../api'
import messages from '../messages'

class GifNew extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      gif_url: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  addNewGif = async (event) => {
    event.preventDefault()

    const { name, gif_url } = this.state
    const { flash, history, user } = this.props

    newGif(this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.addNewGifSuccess, 'alert alert-success'))
      .then(() => history.push('/gif-box-client/my-gifs'))
      .catch(() => flash(messages.addNewGifFailure, 'alert alert-danger'))
  }

  render() {
    const { name, gif_url } = this.state

    return (
      <React.Fragment>
        <form className='auth-form' onSubmit={this.addNewGif}>
          <h3>Save New GIF</h3>

          <label>Title</label>
          <input
            required
            name="name"
            value={name}
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <label>GIF URL</label>
          <input
            required
            name="gif_url"
            value={gif_url}
            type="text"
            placeholder="GIF URL"
            onChange={this.handleChange}
          />
          <button className='btn btn-secondary' type="submit">Save GIF</button>
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(GifNew)
