'use strict';

var webpack = require('webpack');
var path = require('path');


var sassPaths = [ 
  'client/stylesheets/',
]
.map(function(m){ return path.resolve(__dirname, m); })
.join('&includePaths[]=');

module.exports = {
  context: __dirname + '/client',
  entry: {
    main: "./components/app.jsx",
    vendors: ['react', 'page', 'js-csp']
  },

  output: {
    path: "./build",
    filename: "[name].js"
  },
  
  resolve: {
    modulesDirectories: [ 'node_modules' ],
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'shared.js'),
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator/runtime'
    }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }, 
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + sassPaths},
      { test: /\.jsx$|\.js$/, loader: 'jsx?harmony!regenerator'},
      { test: /\.(woff|ttf|eot|svg|png)(\?.*)?/, loader: "url-loader" }
    ]
  }
}
