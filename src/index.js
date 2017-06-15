'use strict';

var driver = require('ruff-driver');
var gpio = require('gpio');

module.exports = driver({

  attach: function(inputs, context) {
    var self = this;
    this._gpioIn = inputs['gpio-in'];

    this._gpioIn.on('interrupt', function(value) {
      self.emit('change', value);
    });
  },

  exports: {}
});