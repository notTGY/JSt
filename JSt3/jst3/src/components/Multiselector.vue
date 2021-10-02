<template>
  <ul id="r">
    <li
      v-for="(hloptions, genSet) in fields"
      :key="genSet"
      @click="e => tpath=genSet"
    >
      {{ genSet }}
      <ul
        v-if="Array.isArray(hloptions) && tpath === genSet"
      >
        <li
          v-for="llopt in hloptions"
          :key="genSet+llopt"
          @click="$emit('updateState', genSet, llopt)"
        >
          {{ llopt }}
        </li>
      </ul>
      <ul v-else-if="tpath === genSet">
        <li
          v-for="(opts, hlSet) in hloptions"
          :key="genSet+hlSet"
          @click="e => lpath = hlSet"
        >
          {{ hlSet }}
          <ul v-if="lpath == hlSet">
            <li
              v-for="llopt in opts"
              :key="genSet+hlSet+llopt"
              @click="$emit('updateState', hlSet, llopt)"
            >
              {{ llopt }}
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import fields from './js/fields.js'

export default {
  name: 'Multiselector',
  data: function() {
    return {
      fields: {},
      tpath: '',
      lpath: '',
    }
  },
  mounted() {
    this.fields = fields
  }
}
</script>

<style scoped>
ul{
  margin: 0;
}
li{
  margin: 0;
  padding: 0;
}

#r{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
