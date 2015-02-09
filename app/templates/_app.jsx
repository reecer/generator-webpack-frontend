'use strict'

var React = require('react');
var {RouterMixin, Transition} = require('../router');

var pageRoutes = require('../routes');

require('../stylesheets/app.scss');

class App extends RouterMixin {
  render() {
    var view = this.getActiveView({ key: Date.now() });
    var transition = this.getTransition();
  
    return (
      <body>
        <Transition transitionName={ transition }>
          { view }
        </Transition>
      </body>
    );
  }

  componentWillMount(){
    this.initRouter(pageRoutes);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  React.render(<App />, document.body);
});
