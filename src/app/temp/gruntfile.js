module.exports = function(grunt) {
	var app_files = [
		'uds/pages/common/*.js',
		'uds/pages/common/*/*.js',
		'uds/pages/landing/*.js',
		],
		modules = 'uds/app.js',
//		controllers  = 'target/js/controllers/*/*.js',
		output = 'uds/main.js',
		test_output = 'test/built.js';

// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ngtemplates:    {
			commonDirectives:          {
				src:        [
					'uds/views/*.html'
				],
				dest:       'uds/templates.js',
				options:    {
					htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 3000,
					protocol: 'http',
					hostname: '*',
					base: './uds',
					keepalive: true,
//                    debug: true,
					open: true
				}
			}
		},
		watch: {
			html: {
				files: 'target/html/*.html',
				tasks: ['ngtemplates', 'concat:dist']
			},
			js: {
				files: app_files,
				tasks: ['concat:dist']
			},
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass:dist']
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [modules, '<%= ngtemplates.commonDirectives.dest %>', app_files/*, controllers*/ ],
				dest: output
			},
			test: {
				src: app_files,
				dest: test_output
			}
		},

		karma: {
			options: {
				configFile: 'test/karma-conf.js'
			},
			single: {
				browsers: ['PhantomJS'],
				singleRun: true,
				autoWatch: true
			},
			chrome: {
				browsers: ['Chrome'],
				singleRun: false,
				autoWatch: true
//				},
//				unit: {
//					singleRun: true
//				},
//				continuous: {
//					background: true
			}
		}
/*
		,

		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'target/css/main.css': 'sass/main.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'target/css/main.min.css': 'sass/main.scss'
				}
			}
		}

		,
		compass: {                  // Task
			dist: {                   // Target
				options: {              // Target options
					sassDir: 'sass',
					cssDir: 'target/css',
					environment: 'production'
				}
			},
			dev: {                    // Another target
				options: {
					sassDir: 'sass',
					cssDir: 'target/css'
				}
			},
			compileWithConfigFile: {
				options: {
					config: 'config.rb'
				}

			}
		}
*/
	});

	// Before generating any new files, remove any previously-created files.


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
//	grunt.loadNpmTasks('grunt-contrib-compass');
//	grunt.loadNpmTasks('grunt-protractor-runner');
//	grunt.loadNpmTasks('grunt-run');

	grunt.registerTask('localhost', ['connect:server', 'watch']);

//	grunt.registerTask('serve', ['karma:continuous:start', 'run:mock_server', 'connect:livereload', 'watch:karma']);

//	grunt.registerTask('unit-test', ['karma:continuous:start', 'watch:karma']);

//	grunt.registerTask('local-e2e-test', ['connect:test',  'protractor:continuous', 'watch:protractor']);

//	grunt.registerTask('test', ['karma:unit:start', 'connect:test', 'run:mock_server', 'protractor:e2e']);

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-karma');
//	grunt.loadNpmTasks('grunt-contrib-sass');
	// Load the plugin that provides the "concat" task.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-angular-templates');

	// Default task(s).
	grunt.registerTask('build', ['ngtemplates', 'concat'/*, 'compass'*/]);
	grunt.registerTask('default', ['ngtemplates', 'concat'/*, 'compass'*/]);
}