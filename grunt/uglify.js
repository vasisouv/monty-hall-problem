module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/resources/js',
            src: '**/*.js',
            dest: 'dist/js',
            ext: '.min.js'
        }]
    }
};