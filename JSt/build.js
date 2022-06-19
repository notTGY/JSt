const { resolve } = require('path')
const { build } = require('esbuild')
const { readFileSync, writeFileSync } = require('fs')

async function start() {
  try {
    const version = readFileSync(resolve(__dirname, './.version'), 'utf8')
    const newVersion = Number(version) + 1
    await build({
      entryPoints: [resolve(__dirname, 'demo/newScenario.js')],
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

async function exstension() {
  try {
    const version = readFileSync(resolve(__dirname, './.version'), 'utf8')
    const newVersion = Number(version) + 1
    await Promise.all([
      build({
        entryPoints: [resolve(__dirname, 'demo/backgroundScenario.js')],
        bundle: true,
        minify: true,
        outfile: resolve(__dirname, 'background.js'),
        logLevel: 'info',
        define: { __version: version },
      }),
      build({
        entryPoints: [resolve(__dirname, 'demo/uiScenario.js')],
        bundle: true,
        minify: true,
        outfile: resolve(__dirname, 'ui.js'),
        logLevel: 'info',
        define: { __version: version },
      })
    ])
  } catch(e) {
    console.log(e)
    return
  }
}

start()
exstension()

