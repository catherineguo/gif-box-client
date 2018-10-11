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
          <div className='gif-options'>
            <button className='btn btn-outline-danger' onClick={() => this.onDeleteGif(gif.id)}><i className="far fa-trash-alt"></i></button>
            <Link to={`/gif-box-client/gifs/${gif.id}/edit`}><button className='btn btn-primary'><i className="fas fa-edit"></i> Edit</button></Link>
          </div>
        </div>
      )
    })

    const noGifs = (
      <p>{'It looks like you have no GIFs saved. Click "Save New GIF" or "Search for GIFs" to get started!'}</p>
    )

    return (
      <div>
        <h1>My GIF Box</h1>
        <div className='my-gifs'>
          <center><Link to='/gif-box-client/gifs/save-new'><button className='btn btn-warning gif-option-btn'>Save New GIF</button></Link>
            <Link to='/gif-box-client/search'><button className='btn btn-warning gif-option-btn'>Search for GIFs</button></Link>
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
