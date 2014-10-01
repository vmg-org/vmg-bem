var through2 = require('through2');

var pth = {
  src: './pages/'
};

// insert separated blocks to layout

//console.log(JSON.stringify(layout));
var rgx = /_[a-z0-9_\-]+\.bemjson\.js$/g;

var hpr = {};

hpr.handleObj = function(obj, keyName) {
  if (typeof obj[keyName] === 'object') {
    //  console.log(keyName);
    hpr.findPattern(obj[keyName]);
  } else if (typeof obj[keyName] === 'string') {
    //    console.log('string finded');
    var matches = obj[keyName].match(rgx);
    if (matches) {
      console.log(matches[0]);
      obj[keyName] = require(pth.src + 'partials/' + matches[0]);
    }
  }
};

hpr.findPattern = function(obj) {
  Object.keys(obj).forEach(hpr.handleObj.bind(null, obj));
};

//console.log('======================================');
//console.log(JSON.stringify(layout));
//
exports.run = function() {
  return through2.obj(function(file, enc, cb) {
    var obj = require(file.history[0]);

    //	  var obj = JSON.parse(file._contents.toString('utf8'));
    hpr.findPattern(obj);

    file.contents = new Buffer(JSON.stringify(obj));
    file.history[0] = file.history[0].replace('.js', '.json');

    this.push(file);

    cb();
  });
};
