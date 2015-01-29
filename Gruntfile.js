module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      easyrtc: {
        src: ['api/src/adapter.js', 'api/src/easyrtc_int.js', 'api/src/easyrtc_lang_en.js'],
        dest: 'api/easyrtc.js',
      },
      easyrtc_ft: {
        src: ['api/src/easyrtc_ft.js'],
        dest: 'api/easyrtc_ft.js',
      }
    },
    
    wrap: {
      options: {
        separator: ''
      },
      easyrtc: {
        src: ['api/easyrtc.js'],
        dest: 'api/easyrtc.js',
        options: {
          wrapper: function () {
            var requireWrapper = grunt.file.read('api/src/easyrtc_wrapper.js');
            return requireWrapper.split('/*{{ CONTENT }}*/');
          } 
        }
      },
      easyrtc_ft: {
        src: ['api/easyrtc_ft.js'],
        dest: 'api/easyrtc_ft.js',
        options: {
          wrapper: function () {
            var requireWrapper = grunt.file.read('api/src/easyrtc_ft_wrapper.js');
            return requireWrapper.split('/*{{ CONTENT }}*/');
          } 
        }
      }
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> Copyright (c) 2014, Priologic Software Inc. All rights reserved. */\n'
      },
      easyrtc: {
        src: 'api/easyrtc.js',
        dest: 'api/easyrtc.min.js'
      },
      easyrtc_ft: {
        src: 'api/easyrtc_ft.js',
        dest: 'api/easyrtc_ft.min.js'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wrap');

  // Tasks
  grunt.registerTask('easyrtc.js','generates new easyrtc.js and easyrtc.min.js files from source',['concat:easyrtc','wrap:easyrtc','uglify:easyrtc']);
  grunt.registerTask('easyrtc_ft.js','generates new easyrtc_ft.js and easyrtc_ft.min.js files from source',['concat:easyrtc_ft','wrap:easyrtc_ft','uglify:easyrtc_ft']);
};