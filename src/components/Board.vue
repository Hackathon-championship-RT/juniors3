<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "Board",
  components: {Tile},
  props: {
    tiles: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <Tile v-for="tile in tiles" :tile="tile" :key="tile"/>
  </div>
</template>

<style scoped>

</style>