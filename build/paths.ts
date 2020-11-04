import path from 'path'
import fs from 'fs'

const appDirectory = fs.realpathSync(process.cwd()) as any
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath)

export default {
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appDist: resolveApp('dist'),
  appIndexJs:  resolveApp('src/index.tsx'),
  appHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json')
}