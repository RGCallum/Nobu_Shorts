import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props)
    this.onSearchAgain = this.onSearchAgain.bind(this)
  }

  onSearchAgain() {
    this.props.onSearchAgain()
  }

  render() {
    let {shows} = this.props
    let results = shows.map( (show, index) => {
      return (
        <div key={index} className="Results_item">
          <img
            className="Results_item_image"
            src={show.image}
            alt={show.name} />
            <p className="Results_item_title">{show.name}</p>
          </div>
      )
    })

    return (
      <div>
        <button onClick={this.onSearchAgain}>Back to Search</button>
        <div className="Results">
          {results}
        </div>
      </div>
    )
  }
}

export default Results;