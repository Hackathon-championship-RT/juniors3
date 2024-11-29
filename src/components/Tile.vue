<script>
export default {
  name: "Tile",
  props: {
    tile: {
      type: Object,
      required: true
    },
    selectable: {
      type: Boolean
    },
    chosen: {
      type: Boolean
    }
  },
  methods: {
    getSrc(type) {
      return "/src/assets/bmw.png"
    },
    getZIndex(tile) {
      return Math.floor(tile['z'] * 100000 - tile['x'] * 100 + tile['y'] * 100 + 100000)
    }
  }
}
</script>

<template>
  <img v-if="selectable && chosen" class="img chosen"
       :style="{'left':(tile['x'] * 89 + tile['z']*20)+'px',
       'top':(tile['y']*109 + 100 - tile['z']*20)+'px',
       'z-index': getZIndex(tile)}"
       :src="getSrc(tile['type'])" @click="$emit('choose', tile)" alt="no"/>
  <img v-else-if="selectable" class="img selectable"
       :style="{'left':(tile['x'] * 89 + tile['z']*20)+'px',
       'top':(tile['y']*109 + 100 - tile['z']*20)+'px',
       'z-index':getZIndex(tile)}"
       :src="getSrc(tile['type'])" @click="$emit('choose', tile)" alt="no"/>
  <img v-else class="img"
       :style="{'left':(tile['x'] * 89 + tile['z']*20)+'px',
       'top':(tile['y']*109 + 100 - tile['z']*20)+'px',
       'z-index':getZIndex(tile)}"
       :src="getSrc(tile['type'])" alt="no"/>
</template>

<style scoped>
.img {
  position: absolute;
}

.selectable:hover, .chosen {
  filter: brightness(80%)
}
</style>