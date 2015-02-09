var React      = require('react/addons'),
    page       = require('page'),
    csp        = require('js-csp'),
    Router     = require('./Router'),
    Transition = require('./VelocityTransitionGroup');


// Global instance
var router;


/**
 * The top-level component should extend this
 */
class RouterMixin extends React.Component {
  constructor(){
    this.state = { _activeView: null };
  }
  /**
   * Custom methods
   */
 
  /** Must be called */
  initRouter(routes){
    router = new Router(routes);
    
    // Start listening to router channel
    csp.go(function*(){
      var route;
      while ((route = yield csp.take(router.chan)) !== csp.CLOSED) {
        // Update! 
        this.swapView(route);
      }
    }.bind(this));
  }

  // Swap out component and trigger update
  swapView(view){
    if(view === this.state._activeView) return;
    
    // Load component async
    router.routes[view].load(function(el){
      router.nextEl = React.createFactory(el);

      // Trigger re-render
      this.setState({_activeView: view});
    }.bind(this));
  }

  /** Returns page element that should be rendered next */
  getActiveView(props){
    if (!router) throw 'No activeView before initializing router';
    return router.nextEl ? router.nextEl(props) : <h2>Loading...</h2>;
  }

  /** Returns the transition name used in next re-render */
  getTransition(){
    if (!router) throw 'No transition before initializing router';
    return router.nextTransition || 'default';
  }


  /**
   * Lifecycle methods
   */

  // Close channel
  componentWillUnmount(){
    if (router)
      router.chan.close();
  }

}


/**
 * All pages should extend this
 */
class PageMixin {
  nav(){
    if (!router) throw 'Attempting navigation before initializing router';

    router.go.apply(router, arguments);
  }

  componentDidMount(){
    React.findDOMNode(this).className += ' Page';
  }
}

module.exports = {
  PageMixin:   PageMixin,
  RouterMixin: RouterMixin,
  Transition:  Transition
};
