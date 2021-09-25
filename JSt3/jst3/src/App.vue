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
import jstAnimation from './components/JStAnimation.vue'
import Constructor from './components/Constructor.vue'
import Download from './components/Download.vue'
import QuickInfo from './components/QuickInfo.vue'

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
    //const clb = () => this.state = 'quick-info'
    //setTimeout(clb, 5000)
    //addEventListener('click', clb)
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
  margin-top: 60px;
}
</style>
