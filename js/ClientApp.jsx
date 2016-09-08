const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = function () {
  return (
    <div>
      <MyTitle title='Whatevs' color='rebeccapurple' />
      <MyTitle title='Hello World!' color='dodgerblue' />
      <MyTitle title='React' color='#f06d06' />
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
