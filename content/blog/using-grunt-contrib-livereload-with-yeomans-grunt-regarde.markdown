---
path: "/using-grunt-contrib-livereload-with-yeomans-grunt-regarde"
title: "Using grunt-contrib-livereload with Yeoman's grunt-regarde"
date: "2013-05-07"
comments: true
---

**Note: Since I wrote this, I found out this method has been deprecated. You can now spawn a livereload server from grunt-contrib-watch. Details are available at [https://github.com/gruntjs/grunt-contrib-watch#optionslivereload](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload).**

* * *

For starters, you'll want to make sure you've udpated your package.json with the right dependencies. I'm not sure that livereload works with the baked in "watch" task and I've been using [grunt-regarde](https://github.com/yeoman/grunt-regarde) of late. My package.json usually looks like this:

``` javascript create your dependencies in package.json
"dependencies": {
  "grunt": "~0.4.x",
  "grunt-contrib-livereload": "0.1.2",
  "grunt-contrib-connect": "0.2.0",
  "grunt-regarde": "0.1.1"
},
```

You obviously want grunt, livereload, connect seems to help with mounting folders, and regarde is like grunt-watch, it just seems to work better (I forget why exactly).

You could make your package.json even better by specifying livereload in its own "devDependencies" object if you're so inclined. Now, run your good old fasioned `npm install` to get the goodies in your project.

Let's talk gruntfiles:

As you probably know, the gruntfile is what makes the magic happen. Somewhere towards the bottom of your gruntfile, you'll want to specify

``` javascript load tasks in your gruntfile
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-connect');
```

At the top of your gruntfile, we'll want to add some utils for livereload. Under `/*global module:false*/`, go ahead and add `var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;`.

After that, you don't really need to learn connect, you just gotta use it. Check it out:

``` javascript
    var folderMount = function folderMount(connect, point) {
      return connect.static(path.resolve(point));
    };
```

This comes before `module.exports = function(grunt) {` 

Now let's get into the meat of the gruntfile. I'm not entirely sure what connect is doing but this is where the middleware magic comes into play. In your modules.exports, add:

``` javascript
    connect: {
      livereload: {
        options: {
          port: 9999,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },
```

Now we want to watch for changes on the files. I like to set up a few different tasks since I don't want my whole grunt process running every time I save a CSS file. Here's what I work with (again, add to `module.exports`):

``` javascript setup tasks to run for various file changes
    regarde: {
      txt: {
        files: ['styles/*.css', 'index.html'],
        tasks: ['livereload']
      },
      styles: {
        files: ['sass/*.scss', 'sass/*/*.scss'],
        tasks: ['compass']
      },
      templates: {
        files: ['templates/*.jade'],
        tasks: ['jade']
      }
    },
```

You can see that I *only* want livereload to fire when there are changes to my compiled css (`*.css`) or to my compiled html. If I edit a SCSS file, I want to fire off just compass. If I edit a jade template, I want to only fire the jade to HTML compiler. I think you can see what's going on. You can toy with this, just be smart about it because you could get caught in an infinite loop.

Lastly, you need to fire off these processes. I like tying them all to my main grunt task because my gruntfile is just *that* sweet. 

``` javascript
    // Default task.
    grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
```

Now, when you fire up `grunt` in the CLI, you should (hopefully, maybe, cross your fingers) get something like this:

    Running "connect:livereload" (connect) task
    Starting connect web server on localhost:9999.

Browse to `http://localhost:9999/yourpage.html` and watch magic happen.

[full gruntfile here.](https://gist.github.com/imjared/5535137) [full package.json here.](https://gist.github.com/imjared/5535154)