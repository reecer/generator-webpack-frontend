'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
writing: function () {
    this.template('_component.jsx', 'src/components/' + this.name + '.jsx', {name: this.name});
    this.template('_component.scss', 'src/components/' + this.name + '.scss', {name: this.name});
  }
});

module.exports = ComponentGenerator;
