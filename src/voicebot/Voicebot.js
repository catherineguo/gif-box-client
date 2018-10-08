import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Voicebot.scss'

class Voicebot extends Component {
  constructor () {
    super()

    this.state = {
      title: '',
      voice: '',
      message: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  render () {
    const { title, voice, message } = this.state

    return (
      <form className='robotify-form'>
        <h3>Robotify My Message</h3>
        <label>Title</label>
        <input
          required
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={this.handleChange}
        />
        <label>Voice</label>
        <select
          required
          name="voice"
        />
        <label>Message</label>
        <textarea
          required
          name="message"
          value={message}
          placeholder="Message"
          onChange={this.handleChange}
        />
        <button type="submit">Preview</button>
      </form>
    )
  }
}

export default Voicebot
