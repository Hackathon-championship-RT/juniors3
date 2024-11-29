<script>
export default {
  name: "Tile",
  data() {
    return {
      src: "./../assets/bmw.png",
      isBlack: true,
      size: 100
    }
  },
  props: {
    tile: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSrc(type) {
      return "/src/assets/bmw.png"
    }
  }
}
</script>

<template>
  <img class="img"
       :style="{'left':(tile['x'] * 90 + tile['z']*20)+'px',
       'top':(tile['y']*110 + 100 - tile['z']*20)+'px',
       'z-index':(tile['z'] * 1000 - tile['x'] + tile['y'] + 1000)}"
       :class="{black:isBlack}"
       :src="getSrc(tile['type'])" alt="no"/>
</template>

<style scoped>
.img {
  position: absolute;
}

.img:hover {
  filter: brightness(80%)
}
</style>