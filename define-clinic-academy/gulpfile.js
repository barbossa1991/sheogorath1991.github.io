var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/sass/style.sass')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
})