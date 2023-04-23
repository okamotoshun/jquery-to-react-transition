const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './app.ts',
  output: {
    filename: 'main.ts',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
