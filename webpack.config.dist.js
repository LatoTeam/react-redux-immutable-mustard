const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SassExtractPlugin = new ExtractTextPlugin('app.css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const validate = require('webpack-validator');

module.exports = validate({
  target: 'web',
  entry: [
    './src/index.js',
    './src/styles/app.scss'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    HTMLWebpackPluginConfig,
    SassExtractPlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    })
  ],
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {test: /\.scss$/, loader: SassExtractPlugin.extract('style', 'css!postcss!sass')},
      {test: /\.inline.svg$/, loader: 'babel!svg-react'},
      {test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/, loaders:
        ['file-loader?name=img/img-[hash:6].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
      }
    ]
  },
  postcss() {
    return [autoprefixer({ browsers: ['last 3 versions', 'ie >= 9', 'and_chr >= 2.3'] })];
  }
});
