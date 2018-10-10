import apiUrl from './../apiConfig.js'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const getGifs = (user) => {
  return fetch(apiUrl + '/gifs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const showGif = (id, user) => {
  return fetch(apiUrl + '/gifs/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const newGif = (gif, user) => {
  return fetch(apiUrl + '/gifs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      gif: {
        name: gif.name,
        gif_url: gif.gif_url
      }
    })
  })
}

export const editGif = (id, gif, user) => {
  return fetch(apiUrl + '/gifs/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      gif: {
        name: gif.name,
        gif_url: gif.gif_url
      }
    })
  })
}

export const deleteGif = (id, user) => {
  return fetch(apiUrl + '/gifs/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
