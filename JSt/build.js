const { resolve } = require('path')
const { build } = require('esbuild')
const { readFileSync, writeFileSync } = require('fs')

async function start() {
  try {
    const version = readFileSync(resolve(__dirname, './.version'), 'utf8')
    const newVersion = Number(version) + 1
    await build({
      entryPoints: [resolve(__dirname, 'demo/index.js')],
      bundle: true,
      minify: true,
      outfile: resolve(__dirname, 'index.js'),
      logLevel: 'info',
      define: { __version: version },
    })
    writeFileSync(resolve(__dirname, './.version'), newVersion.toString())
  } catch(e) {
    console.log(e)
    return
  }
}

start()

