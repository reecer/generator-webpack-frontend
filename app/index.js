'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var WebpackFrontend = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.dest.mkdir('build');
      this.dest.mkdir('src');
      this.dest.mkdir('src/components');

      this.src.copy('_app.jsx'          , 'src/components/app.jsx');
      this.src.copy('_app.scss'         , 'src/components/app.scss');
      this.src.copy('_bower.json'       , 'bower.json');
      this.src.copy('_gulpfile.js'      , 'gulpfile.js');
      this.src.copy("_index.html"       , "src/index.html");
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
