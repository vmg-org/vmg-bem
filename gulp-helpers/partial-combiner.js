/*
 * Combine pages with partials
 * @module
 */
'use strict';

var through2 = require('through2');
var path = require('path');

// insert separated blocks to layout

var rgx = /_[a-z0-9_\-]+\.bj\.js$/g;

var handleObj = function(obj, parentPageId, withDemo, partialsPath, keyName) {
  if (typeof obj[keyName] === 'object') {
    // todo: #43! for key = content this obj = array - don't use Object.keys for array, only forEach
    findPattern(obj[keyName], parentPageId, withDemo, partialsPath);
  } else if (typeof obj[keyName] === 'string') {
    var matches = obj[keyName].match(rgx);
    if (matches) {
      var partialJson = require(partialsPath + matches[0]);
      partialJson = JSON.parse(JSON.stringify(partialJson).replace(/@@parentPage@@/g, parentPageId));

      obj[keyName] = partialJson;
    }
  }
};

var findPattern = function(obj, parentPageId, withDemo, partialsPath) { // jshint ignore:line
  Object.keys(obj).forEach(handleObj.bind(null, obj, parentPageId, withDemo, partialsPath));
};

//
exports.run = function(withDemo) {
  return through2.obj(function(file, enc, cb) {
    //	  file  - js with mobule.exports
    var obj = require(file.path);

    var partialsPath = file.path.replace(/\/[a-zA-Z0-9_\.\-]+$/, '/partials/');
    var parentPageId = path.basename(file.path).replace(/.bemjson.js$/, '');

    console.log(parentPageId);
    //	  var obj = JSON.parse(file._contents.toString('utf8'));
    findPattern(obj, parentPageId, withDemo, partialsPath);

    file.contents = new Buffer(JSON.stringify(obj));
    file.history[0] = file.path.replace(/.js$/, '.json');

    this.push(file);

    cb();
  });
};
