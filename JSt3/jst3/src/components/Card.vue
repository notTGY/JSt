<template>
  <div class="card">
  {{text}}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    text: String
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background: #cce;
}
</style>
