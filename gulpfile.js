var gulp = require('gulp'),
		gulpSequence=require('gulp-sequence'),
    jshint = require("gulp-jshint");
 
gulp.task('jsHint', function () {
    gulp.src('Js/layout.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // ��������
});
gulp.task('default', gulpSequence('jsHint'));