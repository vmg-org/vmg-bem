/*
 * Project tasks
 */
var gulp = require('gulp');
var gitLog = require('git-log');
var exec = require('child_process').exec;
var fs = require('fs');
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
var gulpUtil = require('gulp-util');
var del = require('del');

//['node', 'gulp', 'taskName']

var blockName = gulpUtil.env.block;

var pth = {};

pth.src = './src/';
pth.pages = pth.src + 'pages/';
pth.styles = pth.src + 'styles/';
pth.bems = './bems/'; // json files with clean bemhtml (without translate and model implements);
pth.dst = './dst/';
pth.tmpl = './tmpl';
pth.blockout = './blockout/';

gulp.task('build', ['css', 'remake_bems', 'push_to_templ'], function() {
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

gulp.task('layout', ['clean'], function() {

  var partialsPath = path.resolve(pth.styles); // file.path.replace(/\/[a-zA-Z0-9_\.\-]+$/, '/partials/');
  return gulp.src([pth.pages + '*.bemjson.js', pth.styles + '**/*.bj.js'])
    .pipe(partialCombiner.run(true, partialsPath))
    .pipe(translator.run(vmgDict))
    .pipe(gulp.dest(pth.bems));
});

gulp.task('remake_bems', ['layout'], function() {
  return gulp.src(pth.bems + '*.*')
    .pipe(modelImplementator.run(false))
    .pipe(bhGenerator.run())
    .pipe(gulp.dest(pth.dst));
});

gulp.task('push_to_templ', ['remake_bems'], function() {

  return gulp.src(pth.bems + '**/*.bj.json')
    .pipe(modelImplementator.run(false))
    .pipe(bhGenerator.run())
    .pipe(tmplPusher.run(pth.tmpl))
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

gulp.task('item-css', function() {
  var blocksPath;
  var dstBlocksPath;
  if (!blockName) {
    //    throw new Error('required: --block=name-of-block');
    blocksPath = path.join(pth.styles, '**', '*.styl');
    dstBlocksPath = path.join('blockout');
  } else {
    blocksPath = path.join(pth.styles, blockName, blockName + '.styl');
    dstBlocksPath = path.join('blockout', blockName);
  }

  return gulp.src(blocksPath)
    .pipe(stylus({
      //      inline: true,
      //     sourceRoot: '..',
      //    basePath: 'css'
      //      linenos: true
      use: nib(),
      compress: true
    }))
    .pipe(gulp.dest(dstBlocksPath));
});

gulp.task('item-bh', function() {
  var blocksPath;
  var dstBlocksPath;
  if (!blockName) {
    //    throw new Error('required: --block=name-of-block');
    blocksPath = path.join(pth.styles, '**', '*.bj.js');
    dstBlocksPath = path.join('blockout');
  } else {
    blocksPath = path.join(pth.styles, blockName, blockName + '.bj.js');
    dstBlocksPath = path.join('blockout', blockName);
  }
  var partialsPath = path.resolve(pth.styles);
  return gulp.src(blocksPath)
    .pipe(partialCombiner.run(true, partialsPath))
    .pipe(translator.run(vmgDict))
    .pipe(gulp.dest(dstBlocksPath));
});

gulp.task('item-html', ['item-bh'], function() {
  var blocksPath;
  var dstBlocksPath;
  if (!blockName) {
    //    throw new Error('required: --block=name-of-block');
    blocksPath = path.join(pth.blockout, '**', '*.bj.json');
    dstBlocksPath = pth.blockout;
  } else {
    blocksPath = path.join(pth.blockout, blockName, blockName + '.bj.json');
    dstBlocksPath = path.join(pth.blockout, blockName);
  }

  return gulp.src(blocksPath)
    .pipe(modelImplementator.run(false))
    .pipe(bhGenerator.run())
    .pipe(gulp.dest(dstBlocksPath));
});

/**
 * Only for one block
 *    Out html file for browsering
 */
gulp.task('item-out', ['item-html', 'item-bh', 'item-css'], function(done) {
  if (!blockName) {
    throw new Error('required: --block=name');
  }

  var outHtml = fs.readFileSync(path.join(pth.blockout, blockName, blockName + '.html'));
  outHtml = '<html><head><link rel="stylesheet" href="' + blockName + '.css" /></head><body>' + outHtml + '</body></html>';
  var outPath = path.join(pth.blockout, blockName, 'out.html');
  fs.writeFile(outPath, outHtml, done);
});

function startExpressBlock() {
  var express = require('express');
  var app = express();
  app.use(express.static(pth.blockout));
  app.listen(22222);
  console.log('http://localhost:22222');
}

gulp.task('connect-block', function() {
  startExpressBlock();
});
