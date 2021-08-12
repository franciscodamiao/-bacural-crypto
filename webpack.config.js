const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()], // removes node_modules from your final bundle
  entry: './src/index.ts', // make sure this matches the main root of your code
  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    minimize: true, // enabling this reduces file size and readability
  },
};
