const path = require('path');

module.exports = {
  entry: './src/clickDiv.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
