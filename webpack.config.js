const path              = require('path');
const webpack           = require('webpack');

module.exports = {
  entry: {
    'all': './src/all',
    'china': './src/china',
    'china-regions': './src/china-regions',
    'china-provinces': './src/china-provinces',
    'china-cities-coordinate': './src/china-cities-coordinate'
  },
  devtool: "source-map",
  output: {
    libraryTarget: 'umd',
    library: 'betterEChartsMaps',
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
    ]
  }
}
