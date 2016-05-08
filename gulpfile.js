var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');


gulp.task('sass', function() {
  gulp.src('public/assets/stylesheets/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(csso())

  .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('compress', function() {
  gulp.src([
    'public/app/vendor/angular.js',
    'public/app/vendor/*.js',
    'public/app/index.module.js',
    'public/app/**/*.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('public/assets/stylesheets/*.scss', ['sass']);
});
gulp.task('watch', function() {
  gulp.watch('public/assets/stylesheets/*.scss', ['sass']);
  gulp.watch(['public/**/*.js', '!public/app/app.min.js',  '!public/app/vendor'], ['compress']);
});

gulp.task('default', ['sass', 'compress', 'watch']);
