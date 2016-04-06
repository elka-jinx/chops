/// <binding BeforeBuild='build-html, build-css, build-jspm' Clean='clean' />
// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');

//var
//  watch = require('semantic/tasks/watch'),
//  build = require('semantic/tasks/build')
//;
//gulp.task('watch ui', watch);
//gulp.task('build ui', watch);
