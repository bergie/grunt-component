/*jshint node:true*/
/*
 * grunt-component-builder
 * https://github.com/smhg/grunt-component-builder
 *
 * Copyright (c) 2013 smhg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    component_builder: {
      def: {
        options: {
          dir: 'test/fixtures/default',
          args: [
            '-o ../../../tmp',
            '-n default'
          ]
        }
      },
      default_dependency: {
        options: {
          dir: 'test/fixtures/dependency',
          args: [
            '-o ../../../tmp',
            '-n default-dependency'
          ]
        }
/*
      },
      'custom': {
        options: {
          dir: 'test/fixtures/default',
          args: [
            '--dev'
          ]
          standalone: 'component',
          verbose: true,
          prefix: 'prefix/',
          copy: false,
          use: 'plugin'
        }
*/
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch: {
      files: ['tasks/*', 'test/*', 'package.json', 'Gruntfile.js'],
      tasks: ['test']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'component_builder', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
