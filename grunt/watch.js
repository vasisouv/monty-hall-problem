module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'src/resources/js/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'src/resources/scss/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
};