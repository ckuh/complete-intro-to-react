import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.handleSearchTermChange(event.target.value)
  }
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { string, bool, func } = React.PropTypes

Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  handleSearchTermChange: func
}

module.exports = Header
