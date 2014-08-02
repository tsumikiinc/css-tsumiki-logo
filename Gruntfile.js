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
    cssmin: {
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
      src: {
        files: [
          'src/*'
        ],
        tasks: ['newer:stylus','copy:demo']
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

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['connect','watch']);
  grunt.registerTask('min', ['cssmin']);

};
