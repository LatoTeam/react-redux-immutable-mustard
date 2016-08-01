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
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server', // Tries HMR but doesn't reload the browser upon errors.
    //'webpack/hot/dev-server', // Tries HMR and reloads the browser upon errors.
    './src/index.js',
    './src/styles/app.scss'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  devServer: {
    hot: true,
    contentBase: './src'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  eslint: {
    configFile: './.eslintrc',
    emitWarning: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    SassExtractPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loader: SassExtractPlugin.extract('style', 'css!postcss!sass')},
      {test: /.*\.(gif|png|jpe?g|svg)$/i, loaders:
        ['file-loader?name=img/img-[hash:6].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
      }
    ]
  },
  postcss() {
    return [autoprefixer({ browsers: ['last 3 versions', 'ie >= 9', 'and_chr >= 2.3'] })];
  }
});
