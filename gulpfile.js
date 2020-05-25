const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function(){
    browserSync.init({
        server: './'
    })

    gulp.watch('./src/sass/*.scss', gulp.series('sass'))
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./src/html/*.html').on('change', browserSync.reload)
    gulp.watch('./dist/scripts/*.js').on('change', browserSync.reload)
});