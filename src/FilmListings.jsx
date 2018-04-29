
//  working with solution code

import React, { Component } from 'react';
import FilmRow from './FilmRow.js';


class FilmListings extends Component {
  constructor (props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.state = {
      filter: 'all'
    }
  const allFilms = this.props.films.map((film) => {
  return (
  <FilmRow
  film={film}
  key={film.id}
  onFaveToggle={() => this.props.onFaveToggle(film)}
  />
)
})

  }
handleFilterClick(filter) {
 console.log("Setting filter to " + filter)
 this.setState({filter: filter})

  render() {
    return (
    const allFilms = this.props.films.map( (film, index) => (
    <FilmRow film={film} key={film.id} />))


  <div className="film-list">
  <h1 className="section-title">FILMS</h1>
  <div className="film-list-filters">
  <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
   ALL
  <span className="section-count">{this.props.films.length}</span>
  </div>
  </div>
  <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
   FAVES
  <span className="section-count">0</span>
  </div>
  {allFilms}
  </div>
  ))
}}}
export default FilmListings

