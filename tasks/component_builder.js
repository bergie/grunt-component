/*jshint node:true*/
/*
 * grunt-component-builder
 * https://github.com/smhg/grunt-component-builder
 *
 * Copyright (c) 2013 smhg
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util'),
  path = require('path') || require('fs');

module.exports = function(grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerMultiTask('component_builder', 'Build component.', function() {
    var options = this.options({
        dir: null,
        args: []
      }),
      done,
      processOptions = {};

    // sanity check
    if (!util.isArray(options.args)) {
      grunt.fatal('args parameter needs to be an array');
    }

    // executable
    options.cmd = 'component';

    // make sure the first parameter is "build"
    options.args.unshift('build');

    done = this.async();

    // set cwd if specified
    if (options.dir) {
      processOptions = {
        env: process.env,
        stdio: 'inherit',
        cwd: path.resolve(options.dir)
      };
    }

    grunt.log.writeln('    # ' + options.dir + ' >');
    grunt.log.writeln('    ' + options.cmd + ' ' + options.args.join(' '));

    grunt.util.spawn({
      cmd: options.cmd,
      args: options.args.join(' ').split(' '), // fix: spaces inside args seems to mess things up
      opts: processOptions
    }, function (error, result, code) {
      if (error) {
        grunt.fatal(error);
      }
      done();
    });
  });
};