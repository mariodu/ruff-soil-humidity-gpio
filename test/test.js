'use strict';

var assert = require('assert');
var path = require('path');
var test = require('test');

var driverRunner = require('ruff-driver-runner');

var driverPath = path.join(__dirname, '..');

module.exports = {
  'test gpio change': function(done) {
    driverRunner.run(driverPath, function(error, context) {
      var inputs = context.inputs;
      var device = context.device;
      var gpio = inputs['gpio-in'];
      var value = Math.random();

      device.on('change', function(data) {
        assert.equal(data, value);
        done();
      });

      gpio.emit('interrupt', value);
    });
  }
};

test.run(module.exports);