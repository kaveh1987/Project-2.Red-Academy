var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');


gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
});





gulp.task('compress', function(){
    gulp.src('./js/*.js')
      .pipe(eslint())
      .pipe(uglify())
      .pipe(plumber())
      .pipe(rename({ extname: '.min.js' })) //  Rename the uglified file
      .pipe(gulp.dest('build')) // Where do we put the result?
});



 gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['compress','browser-sync']);
});

var style = ['./sass/*.scss', './sass/**/*.scss']
var styleOut = './build/css'
gulp.task('sass', function() {
   gulp.src
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(styleOut))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(styleOut));
});
gulp.task('sass:watch', function () {
  gulp.watch(style, ['sass']);
});
gulp.task('default', ['compress']);
