<template>
  <jstAnimation
    v-if="state === 'show-animation'"
  />
  <QuickInfo
    v-if="state === 'quick-info'"
  />
  <Constructor
    v-if="state === 'constructor'"
  />
  <Download
    v-if="state === 'download'"
  />
</template>

<script>
import jstAnimation from './components/JStAnimation'
import Constructor from './components/Constructor'
import Download from './components/Download'
import QuickInfo from './components/QuickInfo'

export default {
  name: 'App',
  data: function () {
    return {
      'state': 'show-animation'
    }
  },
  components: {
    Constructor,
    jstAnimation,
    Download,
    QuickInfo,
  },
  created: function () {
    const watcher = () => {
      const loc = document.location.hash.substring(1)
      this.state = loc
      requestAnimationFrame(watcher)
    }
    watcher()

    if (['', '#show-animation'].includes(document.location.hash)) {
      window.location.hash = '#show-animation'
      const clb = () => {
        document.location.hash = '#quick-info'
      }
      setTimeout(clb, 3000)
      addEventListener('click', clb)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
