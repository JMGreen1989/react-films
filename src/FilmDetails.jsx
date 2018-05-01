//   worked with solution code

import React, { Component } from 'react';

class FilmDetails extends Component {
    render() {
      const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
      const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
      let details
      return (
       <div className="film-details">
        <h1 className="section-title">Details</h1>
          {detail}
      </div>
              )
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
      <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
      </div>
        <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
      </div>
    }})

export default FilmDetails
