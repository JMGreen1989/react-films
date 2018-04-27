import React, { Component } from 'react';


class Fave extends Component {
  constructor(props) {
  super(props);
  this.state: isFave = false
  this.handleClick = this.handleClick.bind(this)
  }

  render() {
  const isFave = (this.state.isFave) 'remove_from_queue' : 'add_to_queue'
    return(
  <div className="film-row-fave add_to_queue">
  <p className="material-icons">add_to_queue</p>
  <p onClick={this.handleClick.isFave} e.stopPropagation()/>
</div>
      )
}
handleClick(e){
  console.log('handling Fave Click!');
  }
}

export default Fave;
