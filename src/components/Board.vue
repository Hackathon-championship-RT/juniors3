<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "Board",
  components: {Tile},
  props: {
    tiles: {
      type: Array,
      required: true
    },
    chosen: {
      type: Object
    }
  },
  methods: {
    isSelectable(tile) {
      let left = false, right = false, up = false;
      this.tiles.map((e) => {
        if (e.z === tile.z && e.x === tile.x + 1 && Math.abs(e.y - tile.y) < 1) {
          right = true
        } else if (e.z === tile.z && e.x === tile.x - 1 && Math.abs(e.y - tile.y) < 1) {
          left = true
        } else if (e.z === tile.z + 1 && Math.abs(e.x - tile.x) < 1 && Math.abs(e.y - tile.y) < 1) {
          up = true
        }
      })
      return !up && !(left && right)
    },
    chooseTile(tile) {
      console.log(tile)
    }
  }
}
</script>

<template>
  <div>
    <Tile v-for="tile in tiles" :tile="tile" :selectable="isSelectable(tile)" :chosen="tile === chosen" :key="tile"
          @choose="chooseTile"/>
  </div>
</template>

<style scoped>

</style>