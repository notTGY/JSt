<template>
  <ul id="r">
    <li
      v-for="(hloptions, genSet) in fields"
      :key="genSet"
      @click.stop="updatePath('tpath', genSet)"
      class="high-level"
    >
      {{ genSet }}
      <ul
        v-if="Array.isArray(hloptions) && tpath === genSet"
      >
        <li
          v-for="llopt in hloptions"
          :key="genSet+llopt"
          @click.stop="$emit('updateState', genSet, llopt)"
        >
          {{ llopt }}
        </li>
      </ul>
      <ul v-else-if="tpath === genSet">
        <li
          v-for="(opts, hlSet) in hloptions"
          :key="genSet+hlSet"
          @click.stop="updatePath('lpath', hlSet)"
          class="middle-level"
        >
          {{ hlSet }}
          <ul v-if="lpath == hlSet">
            <li
              v-for="llopt in opts"
              :key="genSet+hlSet+llopt"
              @click.stop="$emit('updateState', hlSet, llopt)"
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
      tpath: 'Color',
      lpath: 'Pill color',
    }
  },
  mounted() {
    this.fields = fields
  },
  methods: {
    updatePath(pathPart, newPathValue) {
      this[pathPart] = this[pathPart] === newPathValue
        ? ''
        : newPathValue
    }
  }
}
</script>

<style scoped>
ul{
  margin: 0;
  background: #ccc;
  font-weight: 500;
}
li{
  margin: 0;
  padding: 0;
  background: #ddd;
  border: 0.5px solid #aaa;
  width: calc(100% - 4px - 1px);
  text-align: left;
  padding-left: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  color: #2c3e50;
  cursor: pointer;
}

.high-level{
  font-weight: 800;
  padding-top: 3px;
  padding-bottom: 3px;
}

.middle-level{
  font-weight: 700;
  padding-top: 3px;
  padding-bottom: 3px;
}

#r{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
