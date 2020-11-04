import express from 'express'
import webpack from 'webpack'
import webpackDevMiddle from 'webpack-dev-middleware'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import WebpackOpenBrowser from 'webpack-open-browser'

import config from '../build/webpack.dev'
import getPort from './utils/getPort'
import { HOST, PORT as DEFAULT_PORT } from './config'

async function start() {
  const PORT = await getPort(HOST, DEFAULT_PORT)
  const address = `http://${HOST}:${PORT}`
  config.plugins.push(new WebpackOpenBrowser({ url: address }))

  const app = express()
  const complier = webpack(config)

  app.use(
    webpackDevMiddle(complier, {
      publicPath: config.output.publicPath
    })
  )

  app.use(express.static(config.output.path))

  const httpServer = app.listen(PORT, HOST, function () {
    console.log(
      `HttpServer is running at ${chalk.magenta.underline(address)} ${
        logSymbols.success
      }`
    )
  })

  ;['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      httpServer.close()
      process.exit()
    })
  })
}

start()
