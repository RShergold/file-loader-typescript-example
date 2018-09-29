const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  
};
