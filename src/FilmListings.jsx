import React, { Component } from 'react';

handleFilterClick('filter')

class FilmListings extends Component {
  render(){
    return(
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
  <button onClick={() => this.handleFilterClick('faves')} </button>

</div>
      );

  }

}












export default App;
