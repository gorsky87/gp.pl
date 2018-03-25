"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const pump = require('pump');
const fs = require('fs');
const rename = require("gulp-rename");
const del = require('del');
const runSequence = require('run-sequence');
const compassImagehelper = require('gulp-compass-imagehelper');
const sassImage = require('gulp-sass-image');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const react = require('gulp-react');
const moveTo = require("moveto");

// Patterns
let scss_pattern = '**/*.scss';
let js_pattern = '*.js';

// Theme directory
let base_dir = '.';
let theme_dir = 'web/theme';

// Subdirectories
let scss_dir = base_dir + '/scss';
let css_dir = theme_dir + '/css';
let js_dir = base_dir + '/js';
let jsmin_dir = theme_dir + '/js';

// Inputs
let scss_input = scss_dir + '/' + scss_pattern;
let js_input = js_dir + '/' + js_pattern;


// Images

let images_input = 'web/assets/images/';


// Dev SASS options
let sassOptionsDev = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Prod SASS options
let sassOptionsProd = {
  outputStyle: 'compressed'
};


// MAIN TASKS
// ----------------------------------------------------

// Default task
gulp.task('default', ['watch' /*, possible other tasks... */]);

// Watch SASS & KSS & JS
gulp.task('watch', ['sass:compile', 'js:compile', 'sass-image'], function(callback) {
  watch(scss_input, function(vinyl) {
    console.log('File ' + vinyl.path + ' changed, running tasks...');
    runSequence([ 'sass:compile']);
  });
  watch(js_input, function(vinyl) {
    console.log('File ' + vinyl.path + ' changed, running tasks...');
    runSequence('js:compile');
  });
});

// Clean, then generate the dev assets
gulp.task('compile', ['clean'], function (cb) {
  return runSequence([ 'sass:compile', 'js:compile', 'js:compile-base' ], cb);
});


// HELPER TASKS
// ----------------------------------------------------

// Compile SASS
gulp.task('sass:compile', function () {
  return gulp
    .src(scss_input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptionsDev).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(css_dir))
    // Release the pressure back and trigger flowing mode (drain)
    // See: http://sassdoc.com/gulp/#drain-event
    .resume();
});

// Compile JS
gulp.task('js:compile', function (cb) {
  pump([
    gulp.src(js_input),
    sourcemaps.init(),
    react({
      es6module: true
    }),
    browserify({
      insertGlobals : true,
      debug : !gulp.env.production,

    }),
    uglify(),
    rename({ suffix: '.min' }),
    sourcemaps.write('.'),
    gulp.dest(jsmin_dir)
  ], cb );
});

gulp.task('sass-image', function () {
  return gulp.src('_sources/images/**/*.+(jpeg|jpg|png|gif|svg)')
    .pipe(compassImagehelper({
      targetFile: '_sass-image.scss', // default target filename is '_sass-image.scss'
      // template: 'your-sass-image-template.mustache',
      images_path: images_input,
      css_path: css_dir,
      prefix: 'icon-'
    }))
    .pipe(gulp.dest('scss'));
});

// Generate the production styles
gulp.task('sass:dist', function () {
  return gulp
    .src(scss_input)
    .pipe(sass(sassOptionsProd))
    .pipe(gulp.dest(css_dir));
});
