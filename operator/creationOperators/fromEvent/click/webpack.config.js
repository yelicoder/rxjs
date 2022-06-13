const path = require('path');

module.exports = {
  entry: './src/click.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
