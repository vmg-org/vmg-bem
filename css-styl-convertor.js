'use strict';

var through2 = require('through2');

exports.run = function() {
  return through2.obj(function(file, enc, cb) {

    file.history[0] = file.history[0].replace('.bemjson.json', '.css');
    this.push(file);
    cb();
  });
};

module.exports = exports;
