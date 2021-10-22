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
  transition: 0.5s;
  border: 3px solid #fff;
  box-shadow: 1px 1px 20px #000;
  padding: 10px;
}
.ci:hover {
  background: #cfcfdf;
  box-shadow: 1px 1px 10px #fff;
  padding: 14px;
  margin: -4px;
}

.ci:active {
  background: #8f8faf;
  box-shadow: 1px 1px 30px #88f;
  padding: 20px;
  margin: -10px;
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
