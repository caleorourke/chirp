/*
 * Copyright © Rasp by SoftLayer, an IBM Company
 *
 * gruntfile.js
 * Rasp's Grunt file. Grunt provides configuration for tasks and npm extensions. It reads JSON data
 * from "package.json" and YAML data from "_config.yml". Visit http://gruntjs.com to learn more.
 *
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),
    banner: '/* \n' +
            ' * Copyright © <%= grunt.template.today(\'yyyy\') %> <%= site.github.owner %>\n' +
            ' * \n' +
            ' * <%= pkg.name %>, Build <%= grunt.template.today(\'yyyy.mm.dd\') %>\n' +
            ' * Code and documentation licensed under the <%= site.github.license %> license\n' +
            ' * \n' +
            ' */\n\n',

    shell: {
      gems: {
        command: ['gem update --system --no-document',
                  'gem install github-pages'].join('&&'),
        options: {
          stdout: true
        }
      }
    },

    clean: {
      assets: ['public/css/app.css',
               'public/js/app.js',
               'public/js/library.js']
    },

    concat: {
      vendors: {
        src: ['js/vendors/transition.js',
              'js/vendors/collapse.js',
              'js/vendors/highlight.js'],
        dest: 'public/js/library.js'
      },

      main: {
        options: {
          banner: '<%= banner %>'
        },
        src: ['js/contents.js',
              'js/metabar.js',
              'js/scrolltop.js',
              'js/easing.js'],
        dest: 'public/js/app.js'
      }
    },

    uglify: {
      main: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        src: '<%= concat.main.dest %>',
        dest: 'public/js/app.js'
      }
    },

    recess: {
      unminify: {
        options: {
          compile: true,
          compress: false,
          banner: '<%= banner %>'
        },
        src: ['less/@app.less'],
        dest: 'public/css/app.css'
      },
      minify: {
        options: {
          compile: true,
          compress: true,
          banner: '<%= banner %>'
        },
        src: ['<%= recess.unminify.src %>'],
        dest: '<%= recess.unminify.dest %>'
      }
    },

    pages: {
      start: {
        options: {
          watch: true,
          serve: true,
          baseurl: ['\'\'']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-jekyll-pages');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build',         ['clean', 'concat', 'uglify', 'recess:minify']);
  grunt.registerTask('build:pretty',  ['clean', 'concat', 'recess:unminify']);
  grunt.registerTask('install',       ['shell:gems']);
  grunt.registerTask('preview',       ['pages:start']);
  grunt.registerTask('serve',         ['build', 'pages:start']);
  grunt.registerTask('serve:pretty',  ['build:pretty', 'pages:start']);
};
