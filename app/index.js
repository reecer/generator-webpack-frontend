'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var WebpackFrontend = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.dest.mkdir('static');
      this.dest.mkdir('static/components');
      this.dest.mkdir('static/stylesheets');

      this.src.copy('_app.jsx'          , 'static/components/app.jsx');
      this.src.copy('_app.scss'         , 'static/stylesheets/app.scss');
      this.src.copy("_index.html"       , "static/index.html");
      this.src.copy('_bower.json'       , 'bower.json');
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
