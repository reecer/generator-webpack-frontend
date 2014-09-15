/**
 * @jsx React.DOM
 */

var React = require('react');
require('./<%= name %>.scss');

var <%= name %> = React.createClass({
	render: function() {
		return (
			<div className="<%= name %>"></div>
		);
	}
});

module.exports = <%= name %>;