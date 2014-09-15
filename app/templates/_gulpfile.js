var gulp 	= require('gulp'),
	webpack = require('webpack');

gulp.task('build', function(){
	// Compile sources
	this.run('webpack');
	// Copy index.html
	gulp.src('src/index.html').pipe(gulp.dest('build/'));
});

gulp.task('webpack', function(){
	webpack(require('./webpack.config.js'), function(err, stats) {
			console.log("[webpack]", stats.toString());
	});
});