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
    getX() {
      return this.tile['x'] * 89 + this.tile['z'] * 20
    },
    getY() {
      return this.tile['y'] * 109 + 100 - this.tile['z'] * 20
    },
    getZIndex() {
      return Math.floor(this.tile['z'] * 100000 - this.tile['x'] * 100 + this.tile['y'] * 100 + 100000)
    },
    getShadowX() {
      return this.tile['x'] * 89 + this.tile['z'] * 20
    },
    getShadowY() {
      return this.tile['y'] * 109 + 80 - this.tile['z'] * 20
    },
    getShadowZIndex() {
      return Math.floor((this.tile['z'] - 1) * 100000 - this.tile['x'] * 100 + this.tile['y'] * 100 + 100000)
    }
  }
}
</script>

<template>
  <div>
    <img draggable="false" v-if="selectable && chosen" class="img chosen" :style="{
      'left': getX() + 'px',
      'top': getY() + 'px',
      'z-index': getZIndex()
    }" :src="getSrc(tile['type'])" @click="$emit('choose', tile)" alt="no" />
    <img draggable="false" onmousedown="off" v-else-if="selectable" class="img selectable" :style="{
      'left': getX() + 'px',
      'top': getY() + 'px',
      'z-index': getZIndex()
    }" :src="getSrc(tile['type'])" @click="$emit('choose', tile)" alt="no" />
    <img draggable="false" v-else class="img" :style="{
      'left': getX() + 'px',
      'top': getY() + 'px',
      'z-index': getZIndex()
    }" :src="getSrc(tile['type'])" alt="no" />
    <img draggable="false" class="shadow" src="/src/assets/shadow.png"
      :style="{ 'left': getShadowX() + 'px', 'top': getShadowY() + 'px', 'z-index': getShadowZIndex() }" alt="no" />
  </div>
</template>

<style scoped>
.img {
  position: absolute;
}

.selectable:hover,
.chosen {
  filter: brightness(80%)
}

.shadow {
  position: absolute;
  opacity: 40%;
  filter: blur(5px);
}
</style>