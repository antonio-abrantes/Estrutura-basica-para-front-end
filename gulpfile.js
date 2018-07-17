/**
 * Created by Antonio on 17/07/2018.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compilar os aquivos sass
gulp.task('sass', function () {

/*return gulp.src('node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());*/

  return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
        .pipe(sass()) // converter o Sass em CSS
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

//Mover js para o src/js
gulp.task('js', function () {

    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());

});

// Servidor para olhar HTML/CSS
gulp.task('serve', ['sass'], function () {

    browserSync.init({
       server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
    gulp.watch("src/css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);


/* Versão apenas com bootstrap e gulp

 var gulp = require('gulp');
 var sass = require('gulp-sass');

 gulp.task('sass', function() {
 return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
 .pipe(sass()) // converter o Sass em CSS
 .pipe(gulp.dest('src/css'));
 });

 gulp.task('watch', function() {
 gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], ['sass']);
 });

 gulp.task('default', ['sass', 'watch']);

*/