import { merge } from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import commonConfig from './webpack.common'

const config = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    })
  ]
})

export default config