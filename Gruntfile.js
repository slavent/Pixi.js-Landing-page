module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    "css/*.css"
                ],
                dest: "css/build/build.css",
            }
        },

        cssmin: {
            minify: {
                src: 'css/build/build.css',
                dest: 'css/build/build.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'cssmin']);

};