/*
 |--------------------------------------------------------------------------
 | Building React for the Browser
 |--------------------------------------------------------------------------
 |
 | I want to be able to immediately bundle my react modules and prepare them
 | for use in the browser.
 |
 */

 // Require dependencies
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var collapse = require('bundle-collapser/plugin');
var gulp = require('gulp');
var reactify = require('reactify'); 
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

var babelifyES6 = function(file) {
  return babelify(file, {presets: ["es2015", "react", "stage-0"]});
};

 
gulp.task('content', function() {
    browserify({
        entries: ['./app/React/content-index.js'], // Only need initial file, browserify finds the deps
        transform: [babelifyES6],
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: false // Requirement of watchify
    })
    .plugin(collapse)
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('content-index.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
    gulp.watch('./app/React/components/**/*.jsx', ['content']);
    gulp.watch('./app/React/components/**/*.js', ['content']);
});

// Just running the tasks
gulp.task('default', ['content', 'watch']);