var gulp     = require('gulp');

var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var cache    = require('gulp-cache');
var jshint   = require('gulp-jshint');
var uglyfly  = require('gulp-uglyfly');
var rename   = require('gulp-rename');
var del      = require('del');

var browserSync = require('browser-sync').create();

var src_dir = 'src/';
var dst_dir = 'dist/';
var paths = {
  html:   src_dir + '**/*.html',
  css:    src_dir + '**/*.css',
  js:     src_dir + '**/*.js',
  images: src_dir + '**/img/**/*'
};


gulp.task('clean', function () {
  return del([dst_dir]);
});


gulp.task('html', ['clean'], function () {
  return gulp.src(paths.html, {base: src_dir})
    .pipe(gulp.dest(dst_dir));
});


gulp.task('css', ['clean'], function () {
  return gulp.src(paths.css, {base: src_dir})
    .pipe(cleanCSS())
    .pipe(gulp.dest(dst_dir));
});


gulp.task('js', ['clean'], function () {
  return gulp.src(paths.js, {base: src_dir})
    .pipe(uglyfly())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dst_dir));
});


gulp.task('images', ['clean'], function () {
  return gulp.src(paths.images, {base: src_dir})
    .pipe(cache(imagemin({optimizationLevel: 5})))
    .pipe(gulp.dest(dst_dir));
});


gulp.task('lint', function () {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: src_dir
    }
  });

  gulp.watch(paths.js, ['lint']);

  gulp.watch(src_dir + '**/*', function(){
    browserSync.reload();
  });
});


gulp.task('default', [ 'html', 'css', 'js', 'images']);