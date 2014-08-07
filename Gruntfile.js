module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      demo: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: [
              '*.css',
              '!t-logo.min.css'
            ],
            dest: 'demo/'
          },
        ]
      }
    },
    stylus: {
      options: {
        compress: false
      },
      dist: {
        expand: true,
        cwd: 'src/',
        src: [
          '*.styl'
        ],
        dest: 'dist/',
        ext: '.css'
      }
    },
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        expand: true,
        cwd: 'src/',
        src: [
          '*.scss'
        ],
        dest: 'dist/',
        ext: '.css'
      }
    },
    cssmin: {
      options: {
        banner: '/* ' + '<%= pkg.description %>' + '. License Tsumiki inc. */'
      },
      minify: {
        expand: true,
        cwd: 'dist/',
        src: [
          '*.css',
          '!*.min.css'
        ],
        dest: 'dist/',
        ext: '.min.css'
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      st: {
        files: [
          'src/*.styl'
        ],
        tasks: ['stylus','copy:demo']
      },
      sa: {
        files: [
          'src/*.scss'
        ],
        tasks: ['sass','copy:demo']
      }
    },
    connect: {
      options: {
        port: 9006,
        base: './demo/'
      },
      server: {
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');



  // Use Stylus
  grunt.registerTask('st', ['connect','watch:st']);

  // Use Sass
  grunt.registerTask('sa', ['connect','watch:sa']);

  // Minify
  grunt.registerTask('min', ['cssmin']);

};
