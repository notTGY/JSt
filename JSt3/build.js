const { build } = require('esbuild')
const { readFileSync, writeFileSync } = require('fs')

async function start() {
  try {
    const version = readFileSync('./.version', 'utf8')
    const newVersion = Number(version) + 1
    await build({
      entryPoints: ['demo/index.js'],
      bundle: true,
      minify: true,
      outfile: 'index.js',
      logLevel: 'info',
      define: { __version: version },
    })
    writeFileSync('./.version', newVersion.toString())
  } catch(e) {
    console.log(e)
    return
  }
}

start()

