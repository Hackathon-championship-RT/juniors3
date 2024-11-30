<script>
import Header from "@/components/Header.vue";
import Board from "@/components/Board.vue";
import FigureService from "@/services/FigureService.js";
import Lose from "./components/Lose.vue";

export default {
  components: {
    Board,
    Header,
    Lose
  },
  data() {
    return {
      tiles: FigureService.turtle,
      moves: [],
      start: false,
      chosen: undefined,
      gameStatus: "lose",
      hint: []
    }
  },
  methods: {
    checkGame() {

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
      this.moves.push(tile1)
      this.moves.push(tile2)
    },
    revert() {
      if (this.moves.length > 0) {
        this.tiles.push(this.moves[this.moves.length - 1])
        this.moves.pop()
        this.tiles.push(this.moves[this.moves.length - 1])
        this.moves.pop()
      }
    }
  },
  mounted() {
    this.checkGame();
  }
}
</script>

<template>
  <div>
    <Header @revert="revert" />
    <main class="flex justify-center items-center" style="min-height: 100vh;">
      <Lose v-if="gameStatus == 'lose'" />
      <Board :tiles="tiles" :chosen="chosen" @choose="chooseTile" />
    </main>
  </div>
</template>
