import React, { Component } from 'react'

// components
const ShowCard = require('./ShowCard')

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => show.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show, key) => (<ShowCard {...show} key={show.imdbID} />))}
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

Search.propTypes = {
  route: object.isRequired
}

module.exports = Search
