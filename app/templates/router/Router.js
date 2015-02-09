var page = require('page'),
    csp  = require('js-csp');


class Router {
  constructor(routes){
    this.routes         = routes;
    this.chan           = csp.chan();
    this.nextTransition = null;
    this.nextEl         = null;

    // Setup channel listening
    for(var r in routes) 
      this.listenToRoute(r);

    // Start listening
    page();
  }

  /**
   * Go to route
   */
  go(route, transition){
    this.nextTransition = transition;
    page(route || '/');
    return this;
  }

  loc(){ return location.pathname.substr(1); }

  listenToRoute(routeName){
    var chan = this.chan;
    page(this.routes[routeName].path, function(){  
      csp.go(function*(){
        yield csp.put(chan, routeName);
      });
    });
  }
};

module.exports = Router;
