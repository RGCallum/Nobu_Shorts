import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'
import { queryTVMaze } from './Utils'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.onSearchAgain = this.onSearchAgain.bind(this)
    this.state = {
      query: '',
      hasSearched: false,
      shows: []
    }
  }

  handleSearchInput(searchText) {
    console.log(searchText)
    this.setState({query: searchText})
  }

  onSubmitQuery(searchText) {
    queryTVMaze(searchText).then((shows)=>{
      this.setState({
        shows: shows,
        hasSearched: true
      })
    })
  }

  onSearchAgain() {
    this.setState({
      hasSearched: false,
      query: ''
    })
  }

  render() {
    return (
      <div className="SearchContainer">
          {
            this.state.hasSearched ?
            <Results
              shows={this.state.shows}
              onSearchAgain={this.onSearchAgain}
            /> :
            <Search
              handleSearchInput={this.handleSearchInput}
              onSubmitQuery={this.onSubmitQuery}
              query={this.state.query}
            />
          }
      </div>
    );
  }
}

export default SearchContainer;