module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/resources/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    }
};