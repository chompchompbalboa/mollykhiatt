// Require dependencies
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var collapse = require('bundle-collapser/plugin');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

// Babelify transform
var babelifyWithSettings = function(file) {
  return babelify(file, {
    plugins: [
      "babel-plugin-transform-class-properties",
      "transform-decorators-legacy"
    ],
    presets: ["env", "react"]
  });
};

// Initialize the current build
var build = function(index, output) {
  if(process.env.NODE_ENV === 'dev') {
    console.log('DEVELOPMENT build');
    build_dev(index, output);
  }
  else {
    console.log('PRODUCTION build')
    build_prod(index, output);
  }
};

// Production builds
var build_prod = function(index, output) {
  browserify({
    entries: [index],
    transform: [babelifyWithSettings],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: false 
  })
  .plugin(collapse)
  .bundle()
  .pipe(source(output))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'));
};

// Development builds
var build_dev = function(index, output) {
  browserify({
    entries: [index],
    transform: [babelifyWithSettings],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  })
  .bundle()
  .pipe(source(output))
  .pipe(gulp.dest('./public/js/'));
};

// Build indexes
gulp.task('buildSite', function() {
  build('./resources/assets/react/index/site-index.js', 'site-index.js');
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('./resources/assets/react/**/*.js', ['buildSite']);
});

// Default tasks
gulp.task('default', ['buildSite', 'watch']);