<template>
  <div class="bg">
  QuickInfo
  <Card text="hi"/>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'QuickInfo',
  components: {
    Card,
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#333, #555);
  color: lightblue;
}
</style>
