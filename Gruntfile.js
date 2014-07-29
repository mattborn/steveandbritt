module.exports = function (grunt) {

	grunt.initConfig({
		assemble: {
			build: {
				options: { layout: 'layout.hbs' },
				files: {
					'index.html': 'index.hbs',
					'alternate.html': 'alternate.hbs'
				}
			}
		},
		sass: {
			options: {
				includePaths: require('node-bourbon').includePaths
			},
			build: {
				files: {
					'index.css': 'index.scss',
					'alternate.css': 'alternate.scss'
				}
			}
		},
		watch: {
			markup: {
				files: '*.hbs',
				tasks: 'newer:assemble',
				options: { livereload: true }
			},
			styles: {
				files: '*.scss',
				tasks: 'newer:sass'
			},
			livereload: {
				files: '*.css',
				options: { livereload: true }
			}
		},
		connect: {
			dev: {
				options: { port: 10414 }
			}
		}
	});

	grunt.loadNpmTasks('grunt-assemble');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('build', [
		'newer:assemble',
		'newer:sass'
	]);

	grunt.registerTask('default', ['build', 'connect', 'watch']);

};
