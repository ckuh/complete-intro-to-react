const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>svideo</h1>
    <input className='search' type='text' placeholder='Search'></input>
    <Link to='/search' className='browse-all'>Browse All</Link>
  </div>
)

module.exports = Landing
