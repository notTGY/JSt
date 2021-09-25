<template>
  <div id="blackdrop">
    <img id="icon" :src="icon"/>
  </div>
</template>

<script>
export default {
  name: 'jstAnimation',
  data: function () {
    return {
      icon: require('../assets/jst-gold.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blackdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#555, #333);
}

#icon {
  animation: 4s grow ease-out;
  width: 100px;
  height: 100px;
  margin-top: -2000px;
}

@keyframes grow {
  from {
    margin-top: 0px;
    width: 100px;
    height: 100px;
  }
  50% {
    margin-top: 0px;
    width: 500px;
    height: 500px;
  }
  80% {
    margin-top: -200vh;
    width: 100px;
    height: 100px;
  }
}
</style>
