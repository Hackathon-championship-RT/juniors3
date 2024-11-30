<script>
import Tile from "@/components/Tile.vue";
import { toHandlerKey } from "vue";

export default {
  name: "Board",
  components: { Tile },
  props: {
    tiles: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      chosen: {

      }
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
      if (!this.chosen.x) {
        this.chosen = tile
        console.log(this.chosen)
        console.log('mistake')
      } else {
        if (this.chosen.type == tile.type) {
          console.log('Удалим')
          $emit('delete', [this.chosen, tile]);
        } else {
          this.chosen = {}
          console.log('1323')
        }
      }
    },
    sendTiles(){
      this.$emit();
      
    }
  }
}
</script>

<template>
  <div>
    <Tile v-for="tile in tiles" :tile="tile" :selectable="isSelectable(tile)" :chosen="tile === chosen" :key="tile"
      @choose="chooseTile(tile)" />
  </div>
</template>

<style scoped></style>