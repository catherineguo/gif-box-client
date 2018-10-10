import React, { Component } from 'react'
import apiUrl from '../../apiConfig.js'
import { Link } from 'react-router-dom'
import { handleErrors, getGifs, deleteGif } from '../api'
import messages from '../messages'
import './MyGifs.scss'

class MyGifs extends Component {
  constructor () {
    super ()
    this.state = {
      gifs: []
    }
  }

  async componentDidMount () {
    const { user } = this.props

    const res = await getGifs(user)
    const resJson = await res.json()

    this.setState({gifs: resJson.gifs})
  }

  async onDeleteGif (id) {
    const { flash, history, user } = this.props

    await deleteGif (id, user)
    this.setState({gifs: this.state.gifs.filter(gif => gif.id !== id)})
  }

  render () {
    const gifBox = this.state.gifs.map(gif => {
      return (
        <div className='gif-box' key={gif.id}>
          <h2>{gif.name}</h2>
          <a href={gif.gif_url} target="_blank"><img src={gif.gif_url} /></a>
          <br />
          <button className='btn btn-danger' onClick={() => this.onDeleteGif(gif.id)}>Remove</button>
          <Link to={`/gif-box-client/gifs/${gif.id}/edit`}><button className='btn btn-primary'>Edit GIF</button></Link>
        </div>
      )
    })

    const noGifs = (
      <p>{'It looks like you have no GIFs saved. Click "Save New GIF" to save one now!'}</p>
    )

    return (
      <div>
        <h1>My GIF Box</h1>
        <div>
          <center><Link to='/gif-box-client/gifs/save-new'><button className='btn btn-warning new-gif-btn'>Save New GIF</button></Link>
            <br />
            {this.state.gifs.length === 0 ? noGifs : null}
          </center>
        </div>
        <div className='gifs-container'>
          {gifBox}
        </div>
      </div>
    )
  }
}

export default MyGifs
