'use strict';

module.exports = function(grunt) {
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Automatically load required Grunt tasks
	require('jit-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'CSS/style.css': 'CSS/style.scss'
				}
			}
		},
		watch: {
			files: 'CSS/*.scss',
			tasks: [ 'sass' ]
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [ 'CSS/*.css', '*.html', 'js/*.js' ]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		}
	});

	grunt.registerTask('css', [ 'sass' ]);
	grunt.registerTask('default', [ 'browserSync', 'watch' ]);
};
