/* jshint node: true */
var gulp = require('gulp');

var g = require('gulp-load-plugins')();

var scriptFiles = './src/**/*.js';

gulp.task('buildJs', function() {
  gulp.src('./src/**/*.js')
    .pipe(g.es6ModuleTranspiler({
      type: 'amd',
      moduleName: function(path) {
        return require('./package.json').name + '/' + path;
      }
    }))
    .pipe(g.concat('game.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('connect', g.connect.server({
  port: process.env.PORT || 8000,
  hostname: '0.0.0.0',
  root: __dirname
}));

gulp.task('watch', function() {
  gulp.watch(scriptFiles, ['buildJs']);
});

gulp.task('default', ['buildJs']);
gulp.task('dev', ['buildJs', 'connect', 'watch']);
