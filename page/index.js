'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var PageGenerator = yeoman.generators.NamedBase.extend({
  writing: function () {
    this.template('_Page.jsx',  'client/pages/' + this.name + '.jsx', {name: this.name});
    this.template('_Page.scss', 'client/stylesheets/' + this.name + '.scss', {name: this.name});
  }
});

module.exports = PageGenerator;
