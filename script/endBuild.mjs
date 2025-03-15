import fs from 'fs'

import './libs/loadEnv.mjs'

const middlewareTypeScriptFile = fs.readFileSync('./middleware.ts').toString()

const lines = middlewareTypeScriptFile.split('\n')

function getEnvPath() {
  let result = 'backstage537'
  if (process.env.BACKSTAGE_PATH !== undefined) {
    result = process.env.BACKSTAGE_PATH
  }
  return result
}

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('script:needToReplace')) {
    lines[i] = lines[i].replace(getEnvPath(), '${backstagePath}')
    break
  }
}

fs.writeFileSync('./middleware.ts', lines.join('\n'))
