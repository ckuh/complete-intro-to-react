import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      </header>
    )
  }
}

module.exports = Header
