import React, { Component } from 'react'

// components
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  }

  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />

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
