/*
 * Project tasks
 * @todo #23! change divs to accordings tags
 * @todo #33! try to change all mixes to inner blocks (in styles)
 */
var gulp = require('gulp');

var gulpHelpersPath = './gulp-helpers/';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
//console.log(bh.apply(layout));
var partialCombiner = require(gulpHelpersPath + 'partial-combiner');
var bhGenerator = require(gulpHelpersPath + 'bh-generator');
var cssStylConvertor = require(gulpHelpersPath + 'css-styl-convertor');
var stylus = require('gulp-stylus');
var nib = require('nib');

//var runSequence = require('run-sequence');

var del = require('del');

var pth = {};
pth.pages = './pages/';
pth.styles = './styles/';
//pth.img = './static/img/';
//pth.fonts = './static/fonts/'
pth.cssResources = './css-resources/';
pth.dst = './dst/';

gulp.task('build', ['css-resources', 'css', 'bh'], function() {
  //  return runSequence('jshint',
  //    'clean',
  //    'layout',
  //    'bh',
  //    'css',
  //    cbk);
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

gulp.task('clean', ['jshint'], function(next) {
  del(pth.dst, next);
});

gulp.task('css-resources', ['clean'], function() {
  return gulp.src(pth.cssResources + '**/*')
    .pipe(gulp.dest(pth.dst + 'css/'));
});

gulp.task('layout', ['clean'], function() {
  return gulp.src(pth.pages + '*.bemjson.js')
    .pipe(partialCombiner.run())
    .pipe(gulp.dest(pth.dst + 'bemjson/'));
});

gulp.task('bh', ['layout'], function() {
  return gulp.src(pth.dst + 'bemjson/*.bemjson.json')
    .pipe(bhGenerator.run())
    .pipe(gulp.dest(pth.dst));
});

gulp.task('css', ['layout'], function() {
  return gulp.src(pth.dst + 'bemjson/*.bemjson.json')
    .pipe(cssStylConvertor.run())
    .pipe(stylus({
      //      inline: true,
      //     sourceRoot: '..',
      //    basePath: 'css'
      //      linenos: true
      use: nib(),
      compress: true
    }))
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

gulp.task('watch', function() {
  return gulp.watch([pth.pages + '**/*', pth.styles + '**/*'], ['build']);
});
