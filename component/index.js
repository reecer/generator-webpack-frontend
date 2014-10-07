'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
writing: function () {
    this.template('_component.jsx', 'static/components/' + this.name + '.jsx', {name: this.name});
    this.template('_component.scss', 'static/stylesheets/' + this.name + '.scss', {name: this.name});
  }
});

module.exports = ComponentGenerator;
