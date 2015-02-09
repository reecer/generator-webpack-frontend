
var React = require('react');
var PageMixin = require('../router').PageMixin;

require('../stylesheets/HomePage.scss');

class HomePage extends PageMixin {

  render(){
    return (
      <div className="HomePage">
        <h1>Home page</h1>
        <a href="" onClick={this._redirectMe.bind(this)}> Click me! </a>
      </div>
    );
  }

  // Testing 404 page
  _redirectMe(){ this.nav('/badRoute', 'slide-forward'); }
}


module.exports = HomePage;
