'use strict';

var through2 = require('through2');

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// todo: #23! fix it @import "/styles/glyphicon-remove-circle/glyphicon-remove-circle.styl"
// @import "/styles/glyphicon-list/glyphicon-list.styl"
var handleItem = function(obj, resultArr, keyName) {
  if (keyName === 'block') {
    // if bem: false - don't add it: no class - no block
    // don't write in bemjson blank blocks, like 'variables', import @variables to main block - PAGE
    if (obj['bem'] !== false) {
      resultArr.push(obj[keyName]); // only strings as block name
    }
  }

  // array or object
  if (typeof obj[keyName] === 'object') {
    if (Array.isArray(obj[keyName]) === false) {
      findAllBlocks(obj[keyName], resultArr);
    } else {
      obj[keyName].forEach(function(elem) {
        if (typeof elem === 'object' && Array.isArray(elem) === false) {
          findAllBlocks(elem, resultArr);
        }
      });
    }
  }
};

var findAllBlocks = function(obj, resultArr) { // jshint ignore:line
  Object.keys(obj).forEach(handleItem.bind(null, obj, resultArr));
};

exports.run = function() {
  return through2.obj(function(file, enc, cb) {
    // find all blocks
    // we can find all eelems too, and exclude non-exising elements, but it is overtask

    var bemjson = require(file.history[0]);

    var arr = [];
    findAllBlocks(bemjson, arr);

    arr = arr.filter(onlyUnique);

    arr = arr.map(function(item) {
      return '@import "../../styles/' + item + '/' + item + '.styl"';
    });

    // import all blocks from /styles/block-name/block-name.styl
    var readyContent = arr.join('\n');
    file.contents = new Buffer(readyContent);
    file.history[0] = file.history[0].replace('.bemjson.json', '-bundle.styl');
    this.push(file);
    cb();
  });
};

module.exports = exports;
