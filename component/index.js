'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the my-generator subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.template('_component.jsx', 'app/components/' + this.name + '.jsx', {name: this.name});
    this.template('_component.scss', 'app/components/' + this.name + '.scss', {name: this.name});
  }
});

module.exports = ComponentGenerator;
