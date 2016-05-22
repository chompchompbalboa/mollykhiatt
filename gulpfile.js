// Require dependencies
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var collapse = require('bundle-collapser/plugin');
var gulp = require('gulp');
var reactify = require('reactify'); 
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

// Babelify transform
var babelifyES6 = function(file) {
  return babelify(file, {presets: ["es2015", "react", "stage-0"]});
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
        transform: [babelifyES6],
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
        transform: [babelifyES6],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    })
    .bundle()
    .pipe(source(output))
    .pipe(gulp.dest('./public/js/'));
};

// Build indexes
gulp.task('all', function() {
    build('./app/React/index/admin-index.js', 'admin-index.js');
    build('./app/React/index/site-index.js', 'site-index.js');
});
gulp.task('Admin', function() {build('./app/React/index/admin-index.js', 'admin-index.js')});
gulp.task('Site', function() {build('./app/React/index/site-index.js', 'site-index.js')});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('./app/React/actions/*.js', ['all']);
    gulp.watch('./app/React/constants/*.js', ['all']);
    gulp.watch('./app/React/store/*.js', ['all']);
    gulp.watch('./app/React/components/Admin/*.js', ['Admin']);
    gulp.watch('./app/React/components/Admin/*.jsx', ['Admin']);
    gulp.watch('./app/React/components/Site/*.js', ['Admin', 'Site']);
    gulp.watch('./app/React/components/Site/*.jsx', ['Admin', 'Site']);
});

// Default tasks
gulp.task('default', ['Admin', 'Site', 'watch']);