/*
 * Project tasks
 */
var gulp = require('gulp');
var gitLog = require('git-log');
var exec = require('child_process').exec;

var critical = require('critical');
var gulpHelpersPath = './gulp-helpers/';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
var partialCombiner = require(gulpHelpersPath + 'partial-combiner');
var translator = require(gulpHelpersPath + 'translator');
var bhGenerator = require(gulpHelpersPath + 'bh-generator');
var cssStylConvertor = require(gulpHelpersPath + 'css-styl-convertor');
var modelImplementator = require(gulpHelpersPath + 'model-implementator');
var path = require('path');
var stylus = require('gulp-stylus');
var nib = require('nib');
var vmgDict = require('vmg-dict').getLocale('en');
var tmplPusher = require(gulpHelpersPath + 'tmpl-pusher');
//var runSequence = require('run-sequence');

var del = require('del');

//['node', 'gulp', 'taskName', 'isProd']
var isProd = process.argv.indexOf('--prod') > 0;
console.log('production: ' + isProd);

var pth = {};

pth.src = './src/';
pth.pages = pth.src + 'pages/';
pth.styles = pth.src + 'styles/';
pth.cssResources = pth.src + 'css-resources/';
pth.bems = './bems/'; // json files with clean bemhtml (without translate and model implements);
pth.dst = isProd ? './dst/' : './dev/';
pth.tmpl = './tmpl';

gulp.task('build', ['css-resources', 'css', 'remake_bems', 'push_to_templ'], function() {
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

  //  var absPath = path.resolve(pth.styles);
  var partialsPath = path.resolve(pth.pages, 'partials'); // file.path.replace(/\/[a-zA-Z0-9_\.\-]+$/, '/partials/');
  return gulp.src([pth.pages + '*.bemjson.js', pth.pages + 'partials/*.bj.js'])
    .pipe(partialCombiner.run(true, partialsPath))
    .pipe(translator.run(vmgDict))
    .pipe(gulp.dest(pth.bems));
});

gulp.task('remake_bems', ['layout'], function() {
  return gulp.src(pth.bems + '**.*')
    .pipe(modelImplementator.run(isProd ? false : true))
    .pipe(bhGenerator.run())
    .pipe(gulp.dest(pth.dst));

  //    .pipe(gulp.dest(pth.dst + 'bemjson/'));
});

gulp.task('push_to_templ', ['remake_bems'], function() {
  return gulp.src(pth.dst + '_*.html')
    .pipe(tmplPusher.run())
    .pipe(gulp.dest(pth.tmpl));
});

/*
gulp.task('bh', ['remake_bems'], function() {
  return gulp.src(pth.dst + 'bemjson/*.bemjson.json')
    .pipe(bhGenerator.run())
    .pipe(gulp.dest(pth.dst));
});
*/
gulp.task('css', ['layout'], function() {
  var absPath = path.resolve(pth.styles);

  // looking blocks only - not required: remaked bems
  return gulp.src(pth.bems + '*.bemjson.json')
    .pipe(cssStylConvertor.run(absPath))
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
  return gulp.src(['./*.js', gulpHelpersPath + '*.js', pth.pages + '**/*.js'])
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

gulp.task('gitlog', function(done) {
  var tmpFilePath = 'doc/log-tmp.log';
  var logFilePath = 'doc/log-201410.log';
  var afterDate = new Date(2014, 9, 1); //new Date(Date.now() - (1000 * 60 * 60 * 24));
  var beforeDate = new Date(2014, 10, 4);

  var shellCommand = 'git log ' + gitLog.generateArgs(afterDate, beforeDate, tmpFilePath).join(' ');
  console.log(shellCommand);

  exec(shellCommand, function(err) {
    if (err) {
      return done(err);
    }

    gitLog.createLog(tmpFilePath, logFilePath, done);
  });
});

gulp.task('critical', function(done) {
  critical.inline({
    base: 'dst/',
    src: 'index.html',
    dest: 'inlined.html'
  });
  done();
  //  critical.generate({
  //    base: 'dst/',
  //    src: 'index.html',
  //    dest: 'styles/main.css',
  //    width: 320,
  //    height: 480
  //  });
  //    critical.generateInline({
  //    // Your base directory
  //    base: './dst/',
  //
  //    // HTML source
  //    src: 'index.html',
  //
  //    // Your CSS Files (optional)
  //    //  css: ['./dst/css/index.css'],
  //
  //    // Viewport width
  //    width: 320,
  //
  //    // Viewport height
  //    height: 480,
  //
  //    // Target for final HTML output
  //    htmlTarget: 'index-critical.html',
  //
  //    // Target for generated critical-path CSS (which we inline)
  //    // styleTarget: 'css/index-critical.css',
  //
  //    // Minify critical-path CSS when inlining
  //    minify: true,
  //
  //    // Extract inlined styles from referenced stylesheets
  //    extract: true
  //  });
});
