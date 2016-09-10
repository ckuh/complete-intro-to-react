import React, { Component } from 'react'

// components
import Header from './Header'

class Details extends Component {
  constructor (props) {
    super(props)

    this.logRoute = this.logRoute.bind(this)
  }

  logRoute () {
    console.log(this.props)
  }

  render () {
    const params = this.props.params || {}
    const { title, description, year, poster, trailer } = params
    return (
      <div className='container'>
        <Header history={this.props.history} showSearch={false} />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen ></iframe>
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object,
  history: object
}

module.exports = Details
