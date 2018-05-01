
//  repaired with solution code

import React, { Component } from 'react';


class Fave extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isFave: false
  }
  this.handleClick = this.handleClick.bind(this)
}

  render() {
  const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
  return (
  <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
  <p className="material-icons">{isFave}</p>
   </div>
   )
}
handleClick(e){
 e.stopPropagation()
 console.log("Handling Fave click!")
 this.setState({isFave: !this.state.isFave})
 this.props.onFaveToggle()
  }
}

export default Fave;
