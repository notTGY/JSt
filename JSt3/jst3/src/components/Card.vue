<template>
  <div>
    <div
      v-bind:class="noInteractive ? 'card' : 'card ci'"
    >
      <h2
        v-bind:style="headerGrad ? {'text-shadow': '1px 1px 1px #00000035', '-webkit-text-fill-color': 'transparent', background: headerColor, '-webkit-background-clip': 'text'} : {color: headerColor}"
      >{{header}}</h2>
      <div v-bind:style="{color: textColor}" class="content">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    header: String,
    text: String,
    headerColor: String,
    headerGrad: Boolean,
    noInteractive: Boolean,
    textColor: String,
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #efefff;
  padding: 1rem;
  transition: 0.5s;
  border: 3px solid #fff;
  box-shadow: 1px 1px 20px #000;
}
.ci:hover {
  margin-left: -0.2rem;
  margin-top: -0.2rem;
  padding: 1.2rem;
  background: #cfcfdf;
  box-shadow: 1px 1px 10px #fff;
}

.ci:active {
  margin-left: -1rem;
  margin-top: -1rem;
  padding: 2rem;
  background: #8f8faf;
  box-shadow: 1px 1px 30px #88f;
}

h2 {
  margin-top: 1rem;
  margin-block: 0;
}
.content{
  margin-top: 2rem;
  text-align: left;
  width: 95%;
}
</style>
