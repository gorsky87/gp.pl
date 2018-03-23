

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pump = require('pump');
var fs = require('fs');
var rename = require("gulp-rename");
var del = require('del');
var runSequence = require('run-sequence');



// Patterns
var scss_pattern = '**/*.scss';
var js_pattern = '*.js';

// Theme directory
var base_dir = '.';
var theme_dir = 'web/theme';

// Subdirectories
var scss_dir = base_dir + '/scss';
var css_dir = theme_dir + '/css';
var js_dir = base_dir + '/js';
var jsmin_dir = theme_dir + '/js/min';

// Inputs
var scss_input = scss_dir + '/' + scss_pattern;
var js_input = js_dir + '/' + js_pattern;

// Dev SASS options
var sassOptionsDev = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Prod SASS options
var sassOptionsProd = {
  outputStyle: 'compressed'
};


// MAIN TASKS
// ----------------------------------------------------

// Default task
gulp.task('default', ['watch' /*, possible other tasks... */]);

// Watch SASS & KSS & JS
gulp.task('watch', ['sass:compile', 'js:compile'], function(callback) {
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
    uglify(),
    rename({ suffix: '.min' }),
    sourcemaps.write('.'),
    gulp.dest(jsmin_dir)
  ], cb );
});

// Compile Base JS
gulp.task('js:compile-base', function (cb) {
  pump([
    gulp.src(base_js_input),
    sourcemaps.init(),
    uglify(),
    rename({ suffix: '.min' }),
    sourcemaps.write('.'),
    gulp.dest(base_jsmin_dir)
  ], cb );
});

// Generate the production styles
gulp.task('sass:dist', function () {
  return gulp
    .src(scss_input)
    .pipe(sass(sassOptionsProd))
    .pipe(gulp.dest(css_dir));
});
