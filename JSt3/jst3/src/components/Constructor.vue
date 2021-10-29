<template>
  <main>
    <section id="JSt-pill" v-bind:class="cn">
      <div id="JSt-buttons-container">
      </div>
      <p id="JSt-message"></p>
    </section>

    <section id="constructor">
      <h1>{{ trans('Constructor') }}</h1>
      <Multiselector
        @updateState="(prop, val) => updateState(prop, val)"
        v-bind="state"
      />
    </section>

    <button id="download" @click="gdow">
<svg viewBox="-4 -2 34 32" fill="none">
<path d="M25 16V23L23.5 24H22H19H13H7H4H2.5L1 23V16M13 1V21M13 21L5 13M13 21L21 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </main>
</template>

<script>
import Multiselector from './Multiselector.vue'
const engToRus = {
  "Constructor":
    "%u041A%u043E%u043D%u0441%u0442%u0440%u0443%u043A%u0442%u043E%u0440",
}

export default {
  name: 'Constructor',
  components: {
    Multiselector,
  },
  data: function() {
    return {
      state: {
        "dimensions": "normal",
        "color": "white",
        "border-width": "4px",
      },
      cn: 'dimensions-normal color-white border-width-4px'
    }
  },
  methods: {
    updateState(prop, val) {
      const key = prop
        .toLowerCase()
        .replaceAll(' ', '-')
      this.state[key] = val
      let cn = ''
      for (const key in this.state) {
        cn += `${key}-${this.state[key]} `
      }
      this.cn = cn
      console.log(this.cn)
    },
    gdow() {
      document.location.hash = '#download'
    },
    trans(str) {
      return unescape(engToRus[str])
    }
  },
}
</script>

<style scoped>
main{
  margin: 0;
  background: linear-gradient(33deg, #304352, #d7d2cc);
  height: 100vh;
}

#JSt-pill {
  overflow: hidden;
  z-index: 100;
}

.dimensions-normal {
  width: 800px;
  height: 150px;
  position: fixed;
  top: 50px;
  left: calc(50vw - 400px);
  border-radius: 75px;
}

.dimensions-big {
  width: 900px;
  height: 170px;
  position: fixed;
  top: 50px;
  left: calc(50vw - 450px);
  border-radius: 85px;
}

.dimensions-verybig {
  width: 1000px;
  height: 200px;
  position: fixed;
  top: 50px;
  left: calc(50vw - 500px);
  border-radius: 100px;
}

.border-width-4px {
  box-shadow: 0px 0px 10px 4px;
}

.border-width-6px {
  box-shadow: 0px 0px 10px 6px;
}

.border-width-10px {
  box-shadow: 0px 0px 10px 10px;
}

.color-white {
  color: #ccd;
  border: 2px solid #aaa;
  background-image: linear-gradient(#fff, #bbbbbb);
}

.color-black {
  color: #222;
  border: 2px solid #333;
  background-image: linear-gradient(#222222, #000);
}

.color-green {
  color: #bfa;
  border: 2px solid #7a6;
  background-image: linear-gradient(#bfa, #8b7);
}

.color-pink {
  color: #fab;
  border: 2px solid #a67;
  background-image: linear-gradient(#fab, #b78);
}

.color-blue {
  color: #abf;
  border: 2px solid #67a;
  background-image: linear-gradient(#abf, #78b);
}

#JSt-message {
  position: relative;
  margin: 0 auto;
  top: -150px;
  height: 150px;
  width: calc(800px - 150px);
  font-family: monospace;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 101;
}

.before-appear {
  animation: 0.7s ease-in slideaway;
}

@keyframes slideaway {
  from {
    margin-left: 75px;
  }
  to {
    margin-left: 800px;
  }
}

#JSt-buttons-container {
  margin-left: 75px;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 150px;
  width: 650px;
  width: calc(800px - 150px);
  font-family: monospace;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  z-index: 102;
}

.JSt-button {
  background-image: linear-gradient(#fff, #bbbbbb);
  width: 150px;
  height: 150px;
  border: 0px;
  padding: 20px;
  transition: 0.5s;
  color: #888;
  z-index: 103;
}

.JSt-button:hover {
  color: #555;
  padding: 15px;
}

.JSt-button:active {
  color: #333;
  padding: 0px;
}

#constructor {
  position: fixed;
  background: #fff;
  width: 40rem;
  bottom: 5rem;
  height: 21rem;
  background: #ddd;
  left: calc(50vw - 20rem);
  border-radius: 1rem;
  box-shadow: 1px 1px 5px #fff;
  min-height: fit-content;
}

#constructor>h1 {
  background: #eee;
  padding: 0.5rem;
  margin: 0;
  border-radius: 1rem;
  margin-bottom: 5px;
  box-shadow: 1px 1px 5px #fff;
  font-size: 3rem;
}

#download {
  position: fixed;
  background: #fff;
  width: 4rem;
  height: 4rem;
  top: 54vh;
  left: 80vw;
  color: #2c3e50;
  border: 2px solid #2c3e50;
  border-radius: 50%;
  transition: 0.5s;
  box-shadow: 0px 0px 5px #555;
}

#download:hover {
  border-width: 4px;
  width: calc(4rem + 8px);
  height: calc(4rem + 8px);
  margin: -4px;
  box-shadow: 0px 0px 20px #fff;
}

#download:active {
  border-width: 4px;
  width: calc(4rem + 16px);
  height: calc(4rem + 16px);
  margin: -8px;
  box-shadow: 0px 0px 30px #fff;
}
</style>
