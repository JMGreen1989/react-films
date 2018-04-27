import React, { Component } from 'react';
import Fave from './Fave';


class FilmRow extends Component {
  render() {
    return(
      <div>
      <div className= "film-summary">
      </div>
      <Fave/>
      </div>
     <button onClick={() => this.handleDetailsClick('faves')}</button>
      )
  }
}

export default FilmRow;
