var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/sass/main.sass')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
});