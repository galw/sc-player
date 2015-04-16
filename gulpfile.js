var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  reactify = require('reactify'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  coffeeify = require('coffeeify');

gulp.task('browserify', function() {

  var bundler = browserify({
    entries: ['./app/application.coffee'],
    transform: [coffeeify, reactify],
    extensions: ['.js', '.jsx', '.coffee'],
    paths: ['./node_modules', './app', './build'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  var watcher = watchify(bundler);

  return watcher
    .on('update', function() {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
        .on('error', swallowError)
        .pipe(source('application.coffee'))
        .pipe(gulp.dest('./build/assets/js'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .on('error', swallowError)
    .pipe(source('application.js'))
    .pipe(gulp.dest('./build/assets/js'));
});

gulp.task('watch', function() {
  gulp.watch("./app/styles/**/*.scss", ['sass']);
});

gulp.task('sass', function() {
  gulp.src('./app/styles/application.scss')
    .pipe(sass())
    .pipe(minifycss())
    .on('error', swallowError)
    .pipe(gulp.dest('./build/assets/styles/'));
});

gulp.task('connect', function() {
  connect.server({
    root: "./build",
    port: 3000
  });
});

gulp.task('default', ['browserify', 'sass', 'watch', 'connect']);

// Util
function swallowError(error) {
  console.log(error.toString())
  this.emit('end');
}