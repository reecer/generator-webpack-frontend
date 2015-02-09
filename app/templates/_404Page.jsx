var React = require('react');
var PageMixin = require('../router').PageMixin;

require('../stylesheets/404Page.scss');

class Page404 extends PageMixin {
  render() {
    return (
      <div className="Page404">
        <h2 className="title">Lost?</h2>
        <div className="goHome" onClick={this._goHome.bind(this)}>
          <br />
          <em className="img-label"> Home </em>
        </div>
      </div>
    );
  }

  _goHome(e){
    this.nav('/', 'slide-back');
  }
}

module.exports = Page404;
