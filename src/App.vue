<script>
import StartApp from '../src/components/StartApp.vue'
import Header from "@/components/Header.vue";
import Board from "@/components/Board.vue";
import FigureService from "@/services/FigureService.js";

export default {
  components: {
    Board,
    Header,
    StartApp
  },
  data() {
    return {
      tiles: FigureService.turtle,
      start: false,
      chosen: undefined
    }
  },
  methods: {
    FigureService() {
      return FigureService
    },
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
    chooseTile(tile) {
      console.log(tile)
      if (this.chosen) {
        if (this.chosen === tile) {
          this.chosen = undefined
        } else if (this.chosen.type === tile.type) {
          this.deleteTiles([this.chosen, tile])
          this.chosen = undefined
        } else {
          this.chosen = tile
        }
      } else {
        this.chosen = tile
      }
    },
    deleteTiles(tiles) {
      let tile1 = tiles[0];
      let tile2 = tiles[1];
      this.tiles = this.tiles.filter((e) => e !== tile1 && e !== tile2)
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
    <Header/>
    <main class="" style="min-height: 100vh;">
      <Board :tiles="tiles" :chosen="chosen" @choose="chooseTile"/>
    </main>
  </div>
</template>