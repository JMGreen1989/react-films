
//  working with solution code

import React,from 'react';
import FilmRow from './filmrow.js';


 FilmListings(props)   {
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
}
    const films = (this.state.filter === 'faves') ? this.props.faves : this.props.films
    const allFilms = films.map((film) => {
      return (
        <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => props.onFaveToggle(film)}
        isFave={props.faves.includes(film)}
        onDetailsClick={() => props.onDetailsClick(film)}
        />
      )
    })

return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>

          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListings;


