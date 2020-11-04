import { argv } from 'yargs'
const HOST = '127.0.0.1'
const PORT = 3001
const OPEN = argv.open
const ANALYZE = argv.analyze

export {
  HOST,
  PORT,
  OPEN,
  ANALYZE
}
