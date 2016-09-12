import React, { Component } from 'react'

// components
import ShowCard from './ShowCard'
import Header from './Header'
import { connector } from './Store'

class Search extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='container'>
        <Header showSearch />

        <div className='shows'>
          {this.props.route.shows
            .filter((show) => show.title.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show, key) => (<ShowCard {...show} key={show.imdbID} />))}
        </div>
      </div>
    )
  }
}

const { object, string } = React.PropTypes

Search.propTypes = {
  route: object.isRequired,
  searchTerm: string
}

module.exports = connector(Search)
