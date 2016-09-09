const React = require('react')
const data = require('../public/data')

// components
const ShowCard = require('./ShowCard')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show, key) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
