/*
 * Project tasks
 * @todo #23! css create files from stylus
 */
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
//console.log(bh.apply(layout));
var partialCombiner = require('./partial-combiner');
var bhGenerator = require('./bh-generator');
var cssStylConvertor = require('./css-styl-convertor');


var pth = {};
pth.pages = './pages/';
pth.dst = './dst/';

gulp.task('build', function() {
  // concat files with templates
  // put it to separate dir (in dst)

  // create html from ready templates
  // put it to dst for browsing

  // get all block names from template
  // @import all styl from blocks repo
  // create css file and put to dst for browsing

  // send to vmg-web clean templates
  // join there with dictionary and other feats
  //
});

gulp.task('layout', function() {
  gulp.src(pth.pages + '*.bemjson.js')
    .pipe(partialCombiner.run())
    .pipe(gulp.dest(pth.dst + 'bemjson/'));
});

gulp.task('bh', function() {
  gulp.src(pth.dst + 'bemjson/*.bemjson.json')
    .pipe(bhGenerator.run())
    .pipe(gulp.dest(pth.dst));
});

gulp.task('css', function() {
  gulp.src(pth.dst + 'bemjson/*.bemjson.json')
    .pipe(cssStylConvertor.run())
    .pipe(gulp.dest(pth.dst + 'css/'));
});

var jshintNotify = function(file) {
  if (file.jshint.success) {
    return false;
  }

  var errors = file.jshint.results.map(function(data) {
    if (data.error) {
      return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
    }
  }).join("\n");
  return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
};

gulp.task('jshint', function() {
  return gulp.src(['./*.js', pth.pages + '**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish))
    .pipe(notify(jshintNotify));
});

function startExpress() {
  var express = require('express');
  var app = express();
  app.use(express.static(pth.dst));
  app.listen(1234);
  console.log('http://localhost:1234');
}

gulp.task('connect', function() {

  startExpress();
});
