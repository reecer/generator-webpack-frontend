'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var WebpackFrontend = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      
      // Destination folders
      this.dest.mkdir('client');
      this.dest.mkdir('client/components');
      this.dest.mkdir('client/stylesheets');
      this.dest.mkdir('client/pages');


      // Config files
      this.src.copy('_package.json'     , 'package.json');
      this.src.copy('_webpack.config.js', 'webpack.config.js');
      
      // Folders
      this.directory('build'            , 'build');
      this.directory('router'           , 'client/router');

      // Scripts
      this.src.copy('_routes.js'        , 'client/routes.js');
      this.src.copy('_app.jsx'          , 'client/components/app.jsx');
      this.src.copy('_HomePage.jsx'     , 'client/pages/HomePage.jsx');
      this.src.copy('_404Page.jsx'      , 'client/pages/404Page.jsx');
      
      // Stylesheets
      this.src.copy('_app.scss'         , 'client/stylesheets/app.scss');
      this.src.copy('_404Page.scss'     , 'client/stylesheets/404Page.scss');
      this.src.copy('_HomePage.scss'    , 'client/stylesheets/HomePage.scss');
    }
  },

  end: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});

module.exports = WebpackFrontend;
