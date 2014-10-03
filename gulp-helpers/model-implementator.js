/**
 * Implement models to BEM json
 *
 * @module
 */

var through2 = require('through2');

var generateModels = function(obj, isGenerateDemo) {
  if (obj.demo === true) {
    if (Array.isArray(obj.content) === false) {
      throw new Error('Demo content must be array with one-type elements');
    }

    if (isGenerateDemo) {
      // some actions
      console.log('true finded ');
      // take first item from content and replace it 'retry' times
      var demoItem = obj.content[0];
      var genArr = [];

      for (var i = 0; i < obj.retry; i += 1) {
        genArr.push(demoItem);
      }
      console.log('genArr', genArr);
      obj.content = genArr;
    } else {
      // else clean content - will be replaced in JS
      obj.content = [];
    }
  }

  // retry it for inner contents
  if (typeof obj.content === 'object') {
    if (Array.isArray(obj.content)) {
      obj.content.forEach(function(item) {
        generateModels(item, isGenerateDemo);
      });
    } else {
      // usually - it is array then {}
      generateModels(obj.content, isGenerateDemo);
    }
  }
};

/**
 * Run implementator
 * @isDemo {Boolean} - If false - remove all demo blocks (will be replaced on js side with dynamic data)
 *     If true - Generate demo models for development purposes
 */
exports.run = function(isGenerateDemo) {
  return through2.obj(function(file, enc, cbk) {
    var obj = JSON.parse(file._contents.toString('utf8'));

    generateModels(obj, isGenerateDemo);

    file.contents = new Buffer(JSON.stringify(obj));

    this.push(file);
    cbk();
  });
};

module.exports = exports;
