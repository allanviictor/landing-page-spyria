const gulp = require('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');


function style() {
    return gulp.src('./src/sass/style.sass') 
    .pipe(sass({ includePaths: ['./node_modules'] })) 
    .pipe(gulp.dest('dist/')) 
    .pipe(browserSync.stream())
}



function js() {
    return gulp.src(['./src/js/vendor/jquery.js', './src/js/vendor/bootstrap.min.js', 
    './src/js/vendor/owl.carousel.min.js', './src/js/vendor/owlcarousel2-filter.min.js', './src/js/app.js'])
    .pipe(concat('app.js')) 
    .pipe(gulp.dest('./dist')) 
    .pipe(browserSync.stream())
}

function html() {
    return gulp.src('./src/pages/*.html')
    .pipe(gulp.dest('./dist'))
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    gulp.watch(['./src/sass/**/*.sass','./src/sass/**/*.scss'], style)
    gulp.watch('./src/pages/*.html', html)
    gulp.watch('./src/js/app.js', js)
    gulp.watch('./dist/*.html').on('change', browserSync.reload)
}


exports.style = style;
exports.watch = watch;
exports.html = html;
exports.js = js;
exports.default = parallel(watch, style, html, js);