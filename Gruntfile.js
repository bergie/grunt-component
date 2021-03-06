/*jshint node:true*/
/*
 * grunt-component
 * https://github.com/smhg/grunt-component
 *
 * Copyright (c) 2013 smhg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      tests: ['tmp', 'test/fixtures/dependency/components']
    },
    jshint: {
      grunt: ['*.js'],
      tasks: ['tasks/*.js']
    },
    component: {
      'default': {
        options: {
          cwd: 'test/fixtures/default',
          args: {
            out: '../../../tmp',
            name: 'default'
          }
        }
      },
      'default-dev': {
        options: {
          cwd: 'test/fixtures/default',
          args: {
            out: '../../../tmp',
            name: 'default-dev',
            dev: true
          }
        }
      },
      'install-dependency': {
        options: {
          cwd: 'test/fixtures/dependency',
          action: 'install'
        }
      },
      'dependency': {
        options: {
          cwd: 'test/fixtures/dependency',
          args: {
            out: '../../../tmp',
            name: 'dependency'
          }
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    },
    watch: {
      files: ['tasks/*', 'test/*', 'package.json', 'Gruntfile.js'],
      tasks: ['test']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['clean', 'jshint', 'component', 'nodeunit']);

  grunt.registerTask('default', ['test']);
};
