//  worked with film solution

import React, from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave';


FilmRow(props) {
  constructor(props) {
  super(props)
  this.handleDetailsClick = this.handleDetailsClick.bind(this)
}
handleDetailsClick(film) {
console.log("Fetching details for " + film.title)
}

    return(
      <div className="film-row" onClick={() => this.handleDetailsClick(props.film)}>
      <FilmPoster film={this.props.film} />
      <div className="film-summary">
      <h1>{this.props.film.title}</h1>
      <p>{new Date(this.props.film.release_date).getFullYear()}</p>
      <Fave/>
      </div>
      </div>
      )
  }

export default FilmRow;
