<template>
  <main class="bg">
    <h1>JSt</h1>

    <div id="main-card-container">
      <p>
        It lets you watch videos with friends in perfect synchronization.
        Also, it gives you ability to slow down or speedup the video unlimitely and provides other useful features.
      </p>
    </div>

    <iframe src="https://nottgy.github.io/JSt/JSt3/demo">
    </iframe>

    <footer id="copyright">
      <a href="https://github.com/notTGY">
        &copy; notTGY 2021
      </a>
    </footer>
  </main>
</template>

<script>

export default {
  name: 'Presentation',
  components: {
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
iframe {
  width: 65vw;
  height: 65vh;
  margin-top: 1rem;
}
#main-card{
  width: 80%;
}
#main-card-container{
  display: flex;
  justify-content: center;
  margin: 1rem;
}

p {
  background: #fff;
  box-shadow: 2px 2px 30px #fff;
  padding: 1.5rem;
  font-size: 1.2rem;
  border-radius: 5rem;
  color: black;
  text-shadow: 1px 1px 5px #000;
}
</style>
