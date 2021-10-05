<template>
  <main class="bg">
    <div class="header-container"><h1>JSt v3</h1></div>
    <Card
      id="c1"
      header="Download Now!"
      text="To download JSt simply click this card, however, you can modify by clicking the other card to provide yourself with amazing look and experience out of the box."
      headerColor="#3256c8"
      textColor="#c79"
      @click="gdow"
    />
    <Card
      id="c2"
      header="Build your Custom JSt!"
      text="Modify look and the feel of your JSt. You can change colors of pretty much everything, add custom widgets, password saving and more... To get to the JSt constructor click this card."
      headerColor="#7256a8"
      textColor="#7e9"
      @click="gcon"
    />
    <footer id="copyright"><a href="https://github.com/notTGY">&copy; notTGY 2021</a></footer>
  </main>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'QuickInfo',
  components: {
    Card,
  },
  methods: {
    gdow() {
      document.location.hash = '#download'
      document.location.reload()
    },
    gcon() {
      document.location.hash = '#constructor'
      document.location.reload()
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
  color: lightblue;
}

h1 {
  margin-top: 0rem;
  animation: scrolltop 0.5s ease-out;
  font-size: 3rem;
  text-decoration: underline 4px #446;
  text-shadow: 1px 1px 4px #000;
}

#c1 {
  position: fixed;
  animation: scrolltop 0.5s ease-out;
  margin-top: 0rem;
  top: 10rem;
  left: 10rem;
  width: 30rem;
  height: 14rem;
  color: #000;
  font-size: 1.5rem;
  max-width: 90%;
}

#c2 {
  position: fixed;
  margin-top: 0rem;
  bottom: 7rem;
  right: 10rem;
  width: 35rem;
  height: 12rem;
  color: #000;
  font-size: 1.5rem;
  max-width: 100%;
  animation: scrolltop 0.5s ease-out;
}

@media(max-width: 500px) {
  #c1{
    left: 0;
  }
  #c2{
    right: 2rem;
    width: 94%;
  }
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
  margin-top: 3rem;
}

#copyright{
  position: fixed;
  bottom: 2rem;
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
</style>
