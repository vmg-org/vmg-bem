/** @module */
var through2 = require('through2');
var path = require('path');

exports.run = function(tmplPath) {
  return through2.obj(function(file, enc, cb) {
    var data = file._contents.toString('utf8');
    data = JSON.stringify(data);
    file.contents = new Buffer(data);
    file.path = path.join(tmplPath, path.basename(file.path));
    file.path = file.path.replace(/.html$/, '.json');
    this.push(file);
    cb();
  });
};

module.exports = exports;
