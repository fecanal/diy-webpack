const path = require('path')

module.exports = {
  // entry: 默认src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'diy.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: 'development'
}