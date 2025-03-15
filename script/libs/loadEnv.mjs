// load-env.mjs
import fs from 'fs'
import dotenv from 'dotenv'

const loadEnvFile = (path) => {
  if (fs.existsSync(path)) {
    dotenv.config({ path })
    console.log(`Loaded: ${path}`)
  }
}

const NODE_ENV = process.env.NODE_ENV || 'development'

loadEnvFile('.env.local')
loadEnvFile(`.env.${NODE_ENV}`)
loadEnvFile('.env')
