import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
    const { flash, user } = this.props
    try {
      const res = await getGifs(user).catch((error) => flash(messages.genericFailure, 'alert alert-danger'))
      const resJson = await res.json().catch((error) => flash(messages.genericFailure, 'alert alert-danger'))

      this.setState({gifs: resJson.gifs})
    } catch (e) {
      flash(messages.genericFailure, 'alert alert-danger')
    }
  }

  async onDeleteGif (id) {
    const { flash, history, user } = this.props
    try {
      await deleteGif (id, user).catch((error) => flash(messages.deleteFailure, 'flash-error'))
      this.setState({gifs: this.state.gifs.filter(gif => gif.id !== id)})
    } catch (e) {
      flash(messages.deleteFailure, 'flash-error')
    }
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
      <p>{'It looks like you have no GIFs saved. Click "Search for GIFs" or "Save New GIF" to get started!'}</p>
    )

    return (
      <div>
        <h1>My GIF Box</h1>
        <div className='my-gifs'>
          <center>
            <Link to='/gif-box-client/search'><button className='btn btn-warning gif-option-btn'>Search for GIFs</button></Link>
            <Link to='/gif-box-client/gifs/save-new'><button className='btn btn-warning gif-option-btn'>Save New GIF</button></Link>
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

export default withRouter(MyGifs)
