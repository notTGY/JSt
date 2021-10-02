<template>
  <main>
    <section id="JSt-pill">
      <div id="JSt-buttons-container">
      </div>
      <p id="JSt-message"></p>
    </section>

    <section id="constructor">
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
export default {
  name: 'Constructor',
  components: {
    Multiselector,
  },
  data: function() {
    return {
      state: {}
    }
  },
  methods: {
    updateState(prop, val) {
      const key = prop
        .toUpperCase()
        .replaceAll(' ', '_')
      this.state[key] = val
      console.log(this.state)
    },
    gdow() {
      document.location.hash = '#download'
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
  width: 800px;
  height: 150px;
  position: fixed;
  top: 50px;
  left: calc(50vw - 400px);
  border-radius: 75px;
  border: 2px solid #aaa;
  background-image: linear-gradient(#fff, #bbbbbb);
  overflow: hidden;
  box-shadow: 0px 0px 10px 4px #ccd;
  z-index: 100;
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
  width: 40vw;
  height: 40vh;
  top: 50vh;
  left: 30vw;
}

#download {
  position: fixed;
  background: #fff;
  width: 4rem;
  height: 4rem;
  top: 54vh;
  left: 80vw;
  border: 2px solid gold;
  border-radius: 50%;
  color: gold;
  transition: 0.5s;
}

#download:hover {
  border-width: 4px;
  width: calc(4rem + 8px);
  height: calc(4rem + 8px);
  margin: -4px;
}

#download:active {
  border-width: 4px;
  width: calc(4rem + 16px);
  height: calc(4rem + 16px);
  margin: -8px;
}
</style>
