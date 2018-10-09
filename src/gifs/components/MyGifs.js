import React, { Component } from 'react'
import apiUrl from '../../apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { handleErrors, getGifs } from '../api'
import messages from '../messages'

class MyGifs extends Component {
  constructor () {
    super ()
    this.state = {
      gifs: []
    }
  }

  async componentDidMount () {
    const { history, user } = this.props

    const res = await getGifs(user)
    const resJson = await res.json()

    this.setState({gifs: resJson.gifs})
  }

  render () {
    const gifBox = this.state.gifs.map(gif => {
      return (
        <React.Fragment key={gif.id}>
          <a href={gif.gif_url} target="_blank">{gif.name}</a>
        </React.Fragment>
      )
    })
    return (
      <div>
        <h1>My GIF Box</h1>
        <div>
          <Link to='/gifs/save-new'><button className='btn btn-primary'>Save New GIF</button></Link>
        </div>
        {gifBox}
      </div>
    )
  }
}

export default MyGifs
