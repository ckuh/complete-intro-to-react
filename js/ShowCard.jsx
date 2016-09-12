const React = require('react')
import { Link } from 'react-router'

const ShowCard = (props) => (
  <div className='show-card'>
    <Link to={`/details/${props.imdbID}`}>
      <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
    </Link>
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.title}</h3>
      <h4 className='show-card-year'>({props.year})</h4>
      <p className='show-card-discription'>{props.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
}

module.exports = ShowCard
