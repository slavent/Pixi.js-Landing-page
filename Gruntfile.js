module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {

            css: {
                src: [
                    "css/*.css",
                ],
                dest: "build/css/build.css",
            },

            js: {
                src: [
                    "js/libs/pixi.min.js",
                    "js/libs/createjs-2014.12.12.min.js",
                    "js/libs/jquery.min.js",
                    "js/libs/jquery.ba-throttle-debounce.min.js",
                    "js/libs/quo.min.js",
                    "js/libs/icheck.js",
                    "js/libs/ion.rangeSlider.min.js",
                    "js/libs/selectize.js",
                    "js/app.js",
                    "js/SlideController.js",
                    "js/WheelController.js",
                    "js/SwipeController.js",
                    "js/NavController.js",
                    "js/Binder.js",
                    "js/ManagerService.js",
                    "js/Slide_1.js",
                    "js/Slide_2.js",
                    "js/Slide_3.js",
                    "js/Slide_4.js",
                    "js/Slide_5.js",
                    "js/Slide_6.js",
                    "js/Slide_7.js",
                    "js/Slide_8.js"
                ],
                dest: "build/js/build.js"
            },

        },

        cssmin: {
            minify: {
                src: 'build/css/build.css',
                dest: 'build/css/build.min.css'
            }
        },

        uglify: {
            build: {
                src: 'build/js/build.js',
                dest: 'build/js/build.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
    grunt.registerTask('dev', ['concat']);

};