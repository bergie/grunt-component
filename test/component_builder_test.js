/*jshint node:true*/

'use strict';

var grunt = require('grunt'),
  normalize = grunt.util.normalizelf;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.component_builder = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  def: function(test) {
    test.expect(1);

    var actual = normalize(grunt.file.read('tmp/default.js'));
    var expected = normalize(grunt.file.read('test/expected/default.js'));
    test.equal(actual, expected, 'one script, no special options');

    test.done();
  },
  default_dependency: function(test) {
    test.expect(1);

    var actual = normalize(grunt.file.read('tmp/default-dependency.js'));
    var expected = normalize(grunt.file.read('test/expected/default-dependency.js'));
    test.equal(actual, expected, 'one script, one dependency, no special options');

    test.done();
  },
};
