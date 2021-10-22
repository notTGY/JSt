<template>
  <div id="page">
  <main class="bg">
    <div class="header-container"><h1>JSt v3</h1></div>
    <div id="c1-cont">
      <Card
        id="c1"
        header="Download Now!"
        text="To download JSt simply click this card, however, you can modify by clicking the other card to provide yourself with amazing look and experience out of the box."
        headerColor="#3256c8"
        textColor="#c79"
        @click="gdow"
      />
    </div>
    <div id="c2-cont">
      <Card
        id="c2"
        header="Build your Custom JSt!"
        text="Modify look and the feel of your JSt. You can change colors of pretty much everything, add custom widgets, password saving and more... To get to the JSt constructor click this card."
        headerColor="#7256a8"
        textColor="#7e9"
        @click="gcon"
      />
    </div>
    <button id="go2pres" @click="gpres">Presentation</button>
    <footer id="copyright"><a href="https://github.com/notTGY">&copy; notTGY 2021</a></footer>
  </main>
  </div>
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
    },
    gpres() {
      document.location.hash = '#presentation'
      document.location.reload()
    },
  }
}
</script>

<style>
#page{
  overflow: x;
  position: absolute;
  top: 0;
}
.bg {
  position: absolute;
  top: 0;
  margin-top: 0;
  width: 100vw;
  min-height: 100vh;
  background-image: radial-gradient(#333, #555);
  color: lightblue;
}

h1 {
  padding: 0;
  margin: 0;
  font-size: 3rem;
  text-decoration: underline 4px #446;
  text-shadow: 1px 1px 4px #000;
}

.header-container {
  animation: scrolltop 0.5s ease-out;
}

#c1-cont {
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
  margin-top: 2rem;
}

#c1 {
  animation: scrolltop 0.5s ease-out;
  width: 30rem;
  color: #000;
  font-size: 1.5rem;
  max-width: 80%;
}

#c2-cont {
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-top: 3rem;
}

#c2 {
  animation: scrolltop 0.5s ease-out;
  width: 35rem;
  height: 12rem;
  color: #000;
  font-size: 1.5rem;
  align-self: right;
  max-width: 80%;
}

@media(max-width: 630px) {
  .content {
    margin-top: 5px!important;
  }
  .bg {
    background: #333;
    height: 51rem;
  }
  #c2 {
    height: 20rem;
    margin-left: 5%;
    margin-right: 0;
  }
  #c1 {
    margin-left: 0;
    margin-right: 0;
  }

  #c1-cont {
    justify-content: flex-start;
    margin-left: 5%;
    margin-right: 0;
  }
  #c2-cont {
    justify-content: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
}

@keyframes scrolltop {
  from {
    opacity: 0;
    margin-top: 1rem;
  }
  to {
    opacity: 1;
    margin-top: 0rem;
  }
}

#copyright{
  position: absolute;
  bottom: 5px;
  width: 100vw;
  display: flex;
  justify-content: center;
}

#copyright>a {
  text-decoration: none;
  color: #777;
  transition: 0.5s;
  margin-top: 0;
  animation: scrolltop 0.5s ease-out;
}

#copyright>a:hover {
  color: #ddd;
}

#copyright>a:active {
  color: #fff;
  text-shadow: 1px 1px 8px #ccc;
}
#go2pres {
  border-radius: 5px;
  width: 10rem;
  height: 3rem;
  margin-top: 5rem;
  font-size: 1.5rem;
  background: darkblue;
  color: aquamarine;
  border: 1px solid aqua;
  transition: 0.5s;
}

#go2pres:hover {
  width: 11rem;
  height: 4rem;
  margin-top: 4.5rem;
  font-size: 1.7rem;
}

#go2pres:active {
  width: 12rem;
  height: 5rem;
  margin-top: 4rem;
  font-size: 2rem;
}
</style>
