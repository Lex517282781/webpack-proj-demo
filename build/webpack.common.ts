import { Configuration } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractLoader from 'mini-css-extract-plugin'
import paths from './paths'

const __DEV__ = process.env.NODE_ENV === 'development'

const comomConfig: Configuration = {
  context: paths.appPath,
  entry: paths.appIndexJs,
  output: {
    publicPath: '/',
    path: paths.appDist,
    filename: '[name]-[hash].bundle.js'
  },
  resolve: {
    extensions: ['.ts', 'tsx', 'js', 'json']
  },
  module: {
    rules: [
      {
        test: /.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/
      },
      {
        test: /.less$/,
        use: [
          __DEV__
            ? 'style-loader'
            : MiniCssExtractLoader.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml
    })
  ]
}

export default comomConfig
