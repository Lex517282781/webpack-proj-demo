import { merge } from 'webpack-merge'

import commonConfig from './webpack.common'

const config = merge(commonConfig, {
  mode: 'development'
})

export default config
