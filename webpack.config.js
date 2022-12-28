const path = require('path')

module.exports = {
  // entry: 默认src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'diy.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)/,
        type: 'asset',
        generator: {
          filename: 'images/[hash:10][ext][query]'
        }
      },
      {
        test: /\.(ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[hash:10][ext][query]'
        }
      }
    ]
  },
  mode: 'development'
}