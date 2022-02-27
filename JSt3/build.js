const { build } = require('esbuild')
const { readFileSync, writeFileSync } = require('fs')

async function start() {
  try {
    await build({
      entryPoints: ['demo/index.js'],
      bundle: true,
      minify: true,
      outfile: 'index.js',
    })
  } catch(e) {
    console.log(e)
    return
  }

  try {
    const file = readFileSync('index.js', 'utf8')
    const text = `<a href=javascript:${encodeURI(file)} > JSt3 </a>`
    writeFileSync('index.html', text)
  } catch(e) {
    console.log(e)
    return
  }
}

start()

