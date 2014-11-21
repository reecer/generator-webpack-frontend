
'use strict';

var webpack = require('webpack');
var path = require('path');

var sassPaths = [ 
    'client/stylesheets/'
]
.map(function(m){ return path.resolve(__dirname, m); })
.join('&includePaths[]=');

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
        new webpack.optimize.CommonsChunkPlugin('shared.js')
    ],


	module: {
		loaders: [
			{ test: /\.css$/,  loader: "style!css" }, 
			{ test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + sassPaths }, 		
			{ test: /\.jsx$/,  loader: "jsx-loader"}
		]
	}
}
