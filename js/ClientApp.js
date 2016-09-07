var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, 'Check out this other thing.')
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory(null),
    React.createElement(MyTitle, null),
    ce(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
