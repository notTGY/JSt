<template>
  <ul id="r">
    <li
      v-for="(hloptions, genSet) in fields"
      :key="genSet"
      @click.stop="updatePath('tpath', genSet)"
      class="high-level"
    >
      {{ trans(genSet) }}
      <ul
        v-if="Array.isArray(hloptions) && tpath === genSet"
      >
        <li
          v-for="llopt in hloptions"
          :key="genSet+llopt"
          @click.stop="$emit('updateState', genSet, llopt)"
        >
          {{ trans(llopt) }}
        </li>
      </ul>
      <ul v-else-if="tpath === genSet">
        <li
          v-for="(opts, hlSet) in hloptions"
          :key="genSet+hlSet"
          @click.stop="updatePath('lpath', hlSet)"
          class="middle-level"
        >
          {{ trans(hlSet) }}
          <ul v-if="lpath == hlSet">
            <li
              v-for="llopt in opts"
              :key="genSet+hlSet+llopt"
              @click.stop="$emit('updateState', hlSet, llopt)"
            >
              {{ trans(llopt) }}
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import fields from './js/fields.js'
const mapToRus = {
  "white":
    "%u0410%u0431%u0441%u043E%u043B%u044E%u0442%u043D%u043E%20%u0431%u0435%u043B%u044B%u0439",
  "black":
    "%u041E%u0441%u043B%u0435%u043F%u0438%u0442%u0435%u043B%u044C%u043D%u043E%20%u0447%u0451%u0440%u043D%u044B%u0439",
  "green":
    "%u0417%u0435%u043B%u0451%u043D%u044B%u0439%20%u041A%u0430%u0439%u0444",
  "pink":
    "%u0420%u043E%u0437%u043E%u0432%u044B%u0439%20%u044D%u043A%u0441%u0442%u0430%u0437",
  "blue":
    "%u0413%u043E%u043B%u0443%u0431%u0435%u043D%u044C%u043A%u0438%u0439",
  "4px":
    "%u0423%u0442%u043E%u043D%u0447%u0451%u043D%u043D%u043E%u0435",
  "10px":
    "%u0410%u043D%u0433%u0435%u043B%u044C%u0441%u043A%u043E%u0435",
  "6px":
    "%u0425%u0430%u0439%u043F%u043E%u0432%u043E%u0435",
  "Color":
    "%u0426%u0432%u0435%u0442",
  "Dimensions":
    "%u0420%u0430%u0437%u043C%u0435%u0440",
  "Border width":
    "%u0421%u0438%u044F%u043D%u0438%u0435",
  "normal":
    "%u041D%u043E%u0440%u043C%u0430%u043B%u044C%u043D%u044B%u0439",
  "big":
    "%u0427%u0443%u0442%u044C%20%u043F%u043E%u0431%u043E%u043B%u044C%u0448%u0435",
  "verybig":
    "%u0414%u043B%u044F%20%u0441%u043B%u0430%u0431%u043E%u0432%u0438%u0434%u044F%u0449%u0438%u0445",
}

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
  },
  methods: {
    updatePath(pathPart, newPathValue) {
      this[pathPart] = this[pathPart] === newPathValue
        ? ''
        : newPathValue
    },
    trans: (str) => unescape(mapToRus[str]),
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
