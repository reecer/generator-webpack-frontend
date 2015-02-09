var React = require('react');
var PageMixin = require('../router').PageMixin;

require('../stylesheets/<%= name %>.scss');

class <%= name %> extends PageMixin {
  render() {
    return (
      <div className="<%= name %>">
        <h1><%= name %></h1>
      </div>
    );
  }
}

module.exports = <%= name %>;
