import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListings.jsx';
import FilmDetails from './FilmDetails.jsx';

class App extends Component {
  constructor(props) {
  super(props);
  this.state.films = true
  this.state.faves = true
  this.state.current = true
  this.handleFaveToggle = this.handleFaveToggle.bind(this)
    array.prototype.slice()
    array.prototype.indexOf(0)

}
  render()  {
    return (
    <div className="film-library">
    <FilmListing films={TMDB.films} />
    <FilmDetails films={TMDB.films} />
      </div>
      )
  }
}


// Old cold, replacing with solution.
// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Fave from './Fave';
// import filmrow from './filmrow';
// import FilmListings from './FilmListings';
// import FilmDetails from './FilmDetails';
// import handleFilterClick from './FilmDetails';
// import allFilms from './FilmDetails';

// class App extends Component {
//   render() {
//     return (

//   <div className="film-library">
//   <div className="film-list">
//     <h1 className="section-title">FILMS</h1>
//   <filmrow />
//   <Fave/>
//   </div>

//   <div className="film-details">
//     <h1 className="section-title">DETAILS</h1>
//   </div>
// </div>
//     );
//   }
// }



export default App;

