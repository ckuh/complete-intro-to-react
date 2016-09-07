var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

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
