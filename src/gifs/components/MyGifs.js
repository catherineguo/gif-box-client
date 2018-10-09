import React, { Component } from 'react'
import apiUrl from '../../apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MyGifs extends Component {
  constructor () {
    super ()
    this.state = {
      gifs: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/gifs`)
    this.setState({gifs: response.data.gifs})
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
