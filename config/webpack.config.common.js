const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'web',
  entry: [
    'babel-polyfill',
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
        use: ['style-loader', 'css-loader', 'less-loader']
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
      filename: '[name].css',
      disable: isDev
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  resolve: {
    modules: [resolve(__dirname, '../src/'), 'node_modules'],
    extensions: ['.js', '.scss', '.less']
  },
  optimization: {
    splitChunks: {
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
