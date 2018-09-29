const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const isDev = process.env.NODE_ENV !== 'production';
// 同构工具
const webpackIsomorphicToolsPlugin =
  // webpack-isomorphic-tools settings reside in a separate .js file 
  // (because they will be used in the web server code too).
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'))
    // also enter development mode since it's a development webpack configuration
    // (see below for explanation)
    .development(isDev);


module.exports = {
  target: 'web',
  entry: [
    '@babel/polyfill',
    './src/client.js'
  ],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].bundle.js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: isDev }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: isDev ? '[path]-[name]_[local]' : '[name]_[local]_[hash:5]', // [hash:base64]
                modules: true,
                sourceMap: isDev,
                minimize: !isDev
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: isDev }
            }
          ]
        })
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: isDev }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: isDev ? '[path]-[name]_[local]' : '[name]_[local]_[hash:5]', // [hash:base64]
                modules: true,
                sourceMap: isDev,
                minimize: !isDev
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: isDev }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader'] //style-loader
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader?limit=5000&name=imgs/[name].[hash:6].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css',
      allChunks: true,
      disable: isDev, // Disable css extracting on development
      ignoreOrder: true
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    webpackIsomorphicToolsPlugin
  ],
  resolve: {
    modules: [resolve(__dirname, '../src/'), 'node_modules'],
    extensions: ['.js', '.scss', '.less']
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },
  stats: {
    assetsSort: '!size',
    children: false,
    chunks: true,
    colors: true,
    entrypoints: false,
    modules: false
  }
};
