<template>
  <main class="bg">
    <div class="header-container"><h1>Download <a v-bind:href="href">JSt</a></h1></div>

    <Card
      id="main-card"
      header="Download Custom JSt"
      text="To download your hand-made, fine-tuned JSt follow instructions on the gif below. If you want, you still can edit your JSt by clicking the button below"
      headerColor="linear-gradient(4deg, #BF953F 0%, #FCF6BA 28.65%, #B38728 57.29%, #FBF5B7 79.17%, #AA771C 100%)"
      headerGrad="true"
      textColor="#aa8"
      v-if="isCustom"
      noInteractive
    />

    <Card
      id="main-card"
      header="Download basic version of JSt"
      text="To download basic version (lite) follow instructions below. However you don't have to :) You can create amazing Custom JSt by clicking <upgrade your JSt> button at the bottom of the screen."
      textColor="darkblue"
      headerColor="brown"
      v-if="!isCustom"
      noInteractive
    />

    <img
      src="https://flex-hq.com/flex-screensaver.png"
      id="guide"
      alt="drag header <Download JSt> to the bookmarklets bar"
    />

    <Card
      id="edit-jst"
      header="upgrade your JSt"
      text=""
      headerColor="Aqua"
      @click="gcon"
    />

    <footer id="copyright"><a href="https://github.com/notTGY">&copy; notTGY 2021</a></footer>
  </main>
</template>

<script>
import Card from './Card'

export default {
  name: 'Download',
  components: {
    Card,
  },
  data: function () {
    return {
      isCustom: false,
      href: 'javascript:(function(){const})()',
    }
  },
  mounted() {
    const { search } = document.location
    if (search !== '') this.isCustom = true
  },
  methods: {
    gcon() {
      document.location.hash = '#constructor'
    }
  }
}
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(#333, #555);
}

h1 {
  margin-top: 0rem;
  animation: scrolltop 0.5s ease-out;
  font-size: 3rem;
  text-shadow: 2px -1px 4px #888;
  color: #888890;
}

@keyframes scrolltop {
  from {
    margin-top: 3rem;
    opacity: 0;
  }
  to {
    margin-top: 0rem;
    opacity: 1;
  }
}

.header-container{
  margin-top: 1rem;
}

#copyright{
  position: fixed;
  bottom: 1rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 0;
  animation: scrolltop 0.5s ease-out;
}

#copyright>a {
  text-decoration: none;
  color: #777;
  transition: 0.5s;
}

#copyright>a:hover {
  color: #ddd;
}

#copyright>a:active {
  color: #fff;
  text-shadow: 1px 1px 8px #ccc;
}

#main-card {
  position: fixed;
  left: calc(50vw - 20rem);
  top: 7rem;
  width: 40rem;
  height: 8rem;
  margin-top: 0rem;
  animation: scrolltop 0.5s ease-out;
  font-size: 1.25rem;
}

#edit-jst {
  position: fixed;
  right: 7rem;
  bottom: 7rem;
  width: 18rem;
  height: 2rem;
  margin-top: 0rem;
  animation: scrolltop 0.5s ease-out;
  font-size: 1.25rem;
}

#guide {
  position: fixed;
  left: 10rem;
  bottom: 5rem;
  width: 40rem;
  margin-top: 0rem;
  animation: scrolltop 0.5s ease-out;
  font-size: 1.25rem;
  box-shadow: 1px 1px 25px purple;
}

a {
  color: purple;
}
</style>
