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
              't-logo.css'
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
        src: 'src/*.styl',
        dest: 'dist/t-logo.css'
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
          'src/t-logo.styl'
        ],
        tasks: ['stylus','copy:demo']
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['connect','watch']);
  grunt.registerTask('min', ['cssmin']);

};
