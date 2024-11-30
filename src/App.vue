<script>
import StartApp from '../src/components/StartApp.vue'
import Header from "@/components/Header.vue";
import Board from "@/components/Board.vue";

export default {
  components: {
    Board,
    Header,
    StartApp
  },
  data() {
    return {
      start: false,
    }
  },
  methods: {
    Start() {
      console.log('start');
      this.start = true;
      localStorage.setItem('newgame', field)
    },
    checkGame() {
      let game = localStorage.getItem('game')
      if (game) {
        this.start = true
      }
    },
    DeleteTiles(tiles) {
      let tile1 = tiles[0];
      let tile2 = tiles[1];
      for (let i = 0; i < this.tiles.length; i++) {
        if (tile1 === this.tiles[i]) {
          this.deletedtiles.push(tile1);
          this.tiles.splice(i, 1) 
        }
      };
      for (let i = 0; i < this.tiles.length; i++) {
        if (tile2 === this.tiles[i]) {
          this.deletedtiles.push(tile2);
          this.tiles.splice(i, 1)
        }
      };
    }
  },
  mounted() {
    this.checkGame();
  }
}
</script>

<template>
  <start-app v-if="!start" @start="Start"></start-app>
  <div v-if="start">
    <Header />
    <main class="" style="min-height: 100vh;">
      <Board :tiles=tiles @delete="DeleteTiles(tiles)" />
    </main>
  </div>
</template>