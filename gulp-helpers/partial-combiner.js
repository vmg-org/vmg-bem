/*
 * Combine pages with partials
 * @module
 */
'use strict';

var through2 = require('through2');
var path = require('path');

var pth = {
  src: '../pages/'
};

// insert separated blocks to layout

//console.log(JSON.stringify(layout));
var rgx = /_[a-z0-9_\-]+\.bj\.js$/g;

var handleObj = function(obj, parentPageId, withDemo, keyName) {
  if (typeof obj[keyName] === 'object') {
    //  console.log(keyName);
    // todo: #43! for key = content this obj = array - don't use Object.keys for array, only forEach
    findPattern(obj[keyName], parentPageId, withDemo);
  } else if (typeof obj[keyName] === 'string') {
    //    console.log('string finded');
    var matches = obj[keyName].match(rgx);
    if (matches) {
      console.log(matches[0]);
      var partialJson = require(pth.src + 'partials/' + matches[0]);

      partialJson = JSON.parse(JSON.stringify(partialJson).replace(/@@parentPage@@/g, parentPageId));

      obj[keyName] = partialJson;
    }
  }
};

var findPattern = function(obj, parentPageId, withDemo) { // jshint ignore:line
  Object.keys(obj).forEach(handleObj.bind(null, obj, parentPageId, withDemo));
};

//console.log('======================================');
//console.log(JSON.stringify(layout));
//
exports.run = function(withDemo) {
  return through2.obj(function(file, enc, cb) {
    var obj = require(file.history[0]);

    var parentPageId = path.basename(file.history[0]).replace(/.bemjson.js$/, '');

    //	  var obj = JSON.parse(file._contents.toString('utf8'));
    findPattern(obj, parentPageId, withDemo);

    file.contents = new Buffer(JSON.stringify(obj));
    file.history[0] = file.history[0].replace(/.js$/, '.json');

    this.push(file);

    cb();
  });
};
