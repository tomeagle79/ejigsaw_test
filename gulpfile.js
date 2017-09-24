'use strict'; // causes node to run the file with strict interpretation of the JS code

var gulp = require('gulp');
var less = require('gulp-less');
var maps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Less

gulp.task('less', function () {
  	gulp.src('./less/*.less') // This will target only the base.less file, so we need to use @import to import the other partials
  		.pipe(maps.init())
      .pipe(less())
      .pipe(maps.write('./'))
  		.pipe(gulp.dest('./css'))
  		.pipe(browserSync.reload({stream: true}))
});

// Browser sync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', function(e) {
    return gulp.src(e.path)
        .pipe(browserSync.reload({stream: true}));
    });

});

gulp.task('default', ['less', 'browser-sync'], function(){
	console.log('This is the default task');
});


// gulp.task('browser-sync', function() {
//     browserSync.init(['css/*.css', 'js/*.js'], {        // files to inject
//         proxy: {
//             host: "localhost",
//             port: 8888
//         }
//     });
// });
