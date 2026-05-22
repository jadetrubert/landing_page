module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      main: {
        files: {
          'styles.css': 'src/styles/styles.less'
        }
      }
    },
    uglify: {
      main: {
        files: {
          'script.min.js': ['script.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
