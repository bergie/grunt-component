[![Build Status](https://travis-ci.org/smhg/grunt-component.png?branch=master)](https://travis-ci.org/smhg/grunt-component)
# grunt-component

> Wrapper around [component(1)](https://github.com/component/component)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-component --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-component');
```

## The "component" task

### Overview
In your project's Gruntfile, add a section named `component` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  component: {
    build: {
      options: {
        // ...
      }
    }
  },
})
```

### Options

#### options.cwd
Type: `String`
Default value: `'.'`

The directory where component(1) is executed. Typically this points to the directory of component.json.

#### options.action
Type: `String`
Default value: `'build'`

The action (first parameter) of component(1).

#### options.args
Type: `Object`
Default value: `{}`

Additional arguments to action (first parameter) of component(1).

Example:
```js
grunt.initConfig({
  component: {
    options: {
      action: 'build', // can be omitted (build = default)
      args: {
        standalone: '$',
        dev: true
      }
    }
  }
})
```
_Note_: property names can be the long or short version of the actual parameters to component(1).


### Usage Examples

#### Default Options
To execute _component build_ in the current directory:

```js
grunt.initConfig({
  component: {
    options: {}
  }
})
```

#### Custom Options
To execute _component build_ in a different directory with the --dev option:

```js
grunt.initConfig({
  component: {
    options: {
      cwd: 'other/directory'
      args: {
        dev: true
      }
    }
  }
})
```
To execute _component install_:

```js
grunt.initConfig({
  component: {
    options: {
      action: 'install'
    }
  }
})
```
This can of course also be combined with the `cwd` option.


## Release History

* 2013-03-07   v0.1.1   Fixed bad dependency version string
* 2013-03-07   v0.1.0   Initial release
