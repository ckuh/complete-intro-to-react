/* global React ReactDOM */

var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are the best!', color: 'red'}),
    React.createElement(MyTitle, {title: 'Props everywhere!', color: 'green'}),
    ce(MyTitle, {title: 'Props are awesome!', color: 'pink'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
