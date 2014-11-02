/** @module */
var through2 = require('through2');

exports.run = function() {	
  return through2.obj(function(file, enc, cb) {
    var data = file._contents.toString('utf8');
    data = JSON.stringify(data);
    file.contents = new Buffer(data);
    file.path = file.path.replace(/.html$/, '.json');
    this.push(file);
    cb();
  });
};

module.exports = exports;
