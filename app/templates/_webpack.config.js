
'use strict';

var webpack = require('webpack');
var path = require('path');

var sassPaths = path.resolve(__dirname, 'bower_components/foundation/scss/');

module.exports = {
	entry: "./static/components/app.jsx",
	output: {
		path: "./static",
		filename: "bundle.js"
	},
	
	resolve: {
		modulesDirectories: [ 'node_modules', 'bower_components' ],
		extensions: ['', '.js', '.jsx'],
	},

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ],


	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }, 
			{ test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + sassPaths }, 		
			{ test: /\.jsx$/,  loader: 'jsx-loader'}
		]
	}
}
