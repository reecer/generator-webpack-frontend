'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var WebpackFrontend = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.dest.mkdir('client');
      this.dest.mkdir('client/components');
      this.dest.mkdir('client/stylesheets');

      this.src.copy('_app.jsx'          , 'client/components/app.jsx');
      this.src.copy('_app.scss'         , 'client/stylesheets/app.scss');
      this.src.copy("_index.html"       , "client/index.html");
      this.src.copy('_package.json'     , 'package.json');
      this.src.copy('_webpack.config.js', 'webpack.config.js');      
    }
  },

  end: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});

module.exports = WebpackFrontend;
