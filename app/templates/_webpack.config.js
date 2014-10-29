
'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: "./client/components/app.jsx",
	output: {
		path: "./client",
		filename: "bundle.js"
	},
	
	resolve: {
		modulesDirectories: [ 'node_modules' ],
		extensions: ['', '.js', '.jsx'],
	},

    plugins: [
        new webpack.optimize.DedupePlugin(),
    ],


	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }, 
			{ test: /\.scss$/, loader: "style!css!sass" },
			{ test: /\.jsx$/,  loader: 'jsx-loader'}
		]
	}
}
