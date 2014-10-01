'use strict';

var bhLib = require('bh');
var bh = new(bhLib.BH);
var through2 = require('through2');

exports.run = function() {
  return through2.obj(function(file, enc, cb) {
    console.log(file.history);
    var obj = require(file.history[0]);

    var htmlCreated = bh.apply(obj);

    file.contents = new Buffer(htmlCreated);
    file.history[0] = file.history[0].replace('.bemjson.json', '.html');

    this.push(file);

    cb();
  });
};

module.exports = exports;
