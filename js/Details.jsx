import React, { Component } from 'react'

class Details extends Component {
  constructor (props) {
    super(props)

    this.logRoute = this.logRoute.bind(this)
  }

  logRoute () {
    console.log(this.props.params.id)
  }

  render () {
    return (
      <div style={{textAlign: 'left'}} className='container'>
        {this.logRoute()}
        <pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object
}

module.exports = Details
