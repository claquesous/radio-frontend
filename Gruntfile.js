'use strict';

function configureGrunt(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-forever');
    grunt.loadNpmTasks('grunt-hogan');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({

        browserify: {
            build: {
                src: [
                    './app/javascripts/**/*.js'
                ],
                dest: './public/javascripts/application.js',
                options: {
                    alias: [
                        './node_modules/brisket/lib/brisket.js:brisket',
                        './app/javascripts/client/ClientApp.js:app/ClientApp'
                    ],
                    ignore: [
                        './app/javascripts/server/**/*.js',
                        './node_modules/brisket/lib/server/**/*.js'
                    ]
                }
            }

        },

        clean: {
            js: [
                'public/javascripts',
            ],
            css: [
                'public/stylesheets',
            ],
            fonts: [
                'public/fonts',
            ]
        },

        exec: {
            nodemon: {
                cmd: 'node_modules/.bin/nodemon server.js'
            }
        },

        concurrent: {
            server: {
                tasks: [
                    "exec:nodemon",
                    "watch"
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            options: {
                interrupt: true,
                debounceDelay: 250
            },
            js: {
                files: [
                    'app/javascripts/**/*.js',
                    '!app/javascripts/templating/*.js',
                    'app/templates/**/*.html',
                    'server.js',
                    'Gruntfile.js',
                ],
                tasks: [
                    'build',
                ]
            }
        },
        forever: {
            radio: {
                options: {
                    index: 'server.js',
                    logDir: 'log',
                    logFile: 'forever.log',
                }
            }
        },
        hogan: {
            compile: {
                src: [
                    "app/templates/**/*.html"
                ],
                dest: "app/javascripts/templating/templates.js",
                options: {
                    binderName: "nodejs",
                    nameFunc: stripPathAndExtension,
                    exposeTemplates: true
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'node_modules/jquery-ui/themes/vader/jquery-ui.min.css',
                        'app/stylesheets/**/*.css'
                    ],
                    dest: 'public/stylesheets/application.min.css',
                }]
            }
        },
        copy: {
            fonts: {
                files: [
                    {
                        cwd: 'node_modules/bootstrap/fonts/',
                        src: ['**'],
                        dest: 'public/fonts/',
                        expand: true,
                    },
                ],
            }
        },
    });


    grunt.registerTask('build', [
        'clean:js',
        'clean:css',
        'hogan:compile',
        'browserify:build',
        'cssmin:target',
        'copy:fonts',
    ]);

    grunt.registerTask('server', [
        'build',
        'concurrent:server',
    ]);

    grunt.registerTask('default', ['server']);
}

function stripPathAndExtension(file) {
    return file.replace("app/templates/", "").split(".")[0];
}

module.exports = configureGrunt;
