const { build } = require('esbuild')

async function start() {
  try {
    await build({
      entryPoints: ['demo/index.js'],
      bundle: true,
      minify: true,
      outfile: 'index.js',
    })
    console.log('compiled successfully!')
  } catch(e) {
    console.log(e)
    return
  }
}

start()

