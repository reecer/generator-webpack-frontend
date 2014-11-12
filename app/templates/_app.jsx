/**
 * @jsx React.DOM
 */

var React = require('react');

require('../stylesheets/app.scss');

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
				<h1>Example app</h1>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));