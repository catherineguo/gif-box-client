import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import apiUrl from '../../apiConfig.js'
import axios from 'axios'
import { handleErrors, showGif, editGif } from '../api'
import messages from '../messages'

class GifEdit extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      gif_url: ''
    }
  }

  async componentDidMount () {
    const { user } = this.props
    const id = this.props.match.params.id

    const res = await showGif(id, user)
    const resJson = await res.json()

    this.setState({name: resJson.gif.name})
    this.setState({gif_url: resJson.gif.gif_url})
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  updateGif = async (event) => {
    event.preventDefault()

    const id = this.props.match.params.id
    const { name, gif_url } = this.state
    const { flash, history, user } = this.props

    editGif(id, this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.editGifSuccess, 'alert alert-success'))
      .then(() => history.push('/gif-box-client/my-gifs'))
      .catch(() => flash(messages.editGifFailure, 'alert alert-danger'))
  }

  render() {
    const { name, gif_url } = this.state

    return (
      <React.Fragment>
        <form className='auth-form' onSubmit={this.updateGif}>
          <h3>Edit GIF</h3>
          <center><img src={gif_url} /></center>
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
          <button className='btn btn-secondary' type="submit">Update GIF</button>
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(GifEdit)
