const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'development.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};
