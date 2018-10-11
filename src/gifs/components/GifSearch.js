import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import apiUrl from '../../apiConfig.js'
import messages from '../messages'
import './GifSearch.scss'

class GifSearch extends Component {
  constructor () {
    super()
    this.state = {
      searchTerms: '',
      resultGifs: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  searchGifs = (event) => {
    event.preventDefault()

    const { searchTerms } = this.state

    fetch('https://api.tenor.com/v1/search?tag=' + this.state.searchTerms + '&key=9Y2VG4NM64AH&limit=12&contentfilter=medium')
      .then((res) => res.json())
      .then((data) => {
        this.setState({resultGifs: data.results})
        console.log('this is gif results', this.state.resultGifs)
      })
      .catch((error) => console.log('There was a problem in fetching data'))
  }

  render() {
    const { searchTerms } = this.state
    const tenorApiUrl = 'https://tenor.com/gifapi/documentation'
    const results = this.state.resultGifs.map(gif => {
      return (
        <div className='result-img' key={gif.id}>
          {console.log('this is gif.id', gif.id)}
          {console.log('this is gif.media[0].mediumgif.url', gif.media[0].mediumgif.url)}
          <a href={gif.media[0].mediumgif.url} target="_blank"><img src={gif.media[0].mediumgif.url} /></a>
          <br />
        </div>
      )
    })

    return (
      <React.Fragment>
        <div className='search'>
          <h1>Search for GIFs</h1>
          <p>Powered by <a href={tenorApiUrl} target='_blank'>tenor</a></p>
          <form className='search-bar' onSubmit={this.searchGifs}>
            <input
              required
              name="searchTerms"
              value={searchTerms}
              type="text"
              placeholder="Enter your search terms (e.g. happy, excited, sad)"
              onChange={this.handleChange}
            />
            <button className='btn btn-secondary' type="submit">Search</button>
          </form>
        </div>
        <div className='results-container'>
          {results}
        </div>
      </React.Fragment>
    )
  }
}

export default GifSearch
