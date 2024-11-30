<script>
import Header from "@/components/Header.vue";
import Board from "@/components/Board.vue";
import FigureService from "@/services/FigureService.js";

export default {
  components: {
    Board,
    Header,
  },
  data() {
    return {
      tiles: FigureService.getTurtle(),
      moves: [],
      start: false,
      chosen: undefined,
      gameStatus: "game",
      hint: [],
      isShowHint: false
    }
  },
  methods: {
    checkGame() {
      if (this.tiles.length === 0) {
        this.gameStatus = "win"
      } else {
        const dict = {}
        for (const tile of this.tiles) {
          if (this.isSelectable(tile)) {
            if (dict[tile.type] === undefined) {
              dict[tile.type] = [tile]
            } else {
              dict[tile.type].push(tile)
            }
          }
        }
        for (let i = 0; i < 52; i++) {
          if (dict[i] && dict[i].length >= 2) {
            this.hint = [dict[i][0], dict[i][1]]
            this.gameStatus = "game"
            return
          }
        }
        this.gameStatus = "lose"
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
      this.isShowHint = false
    },
    deleteTiles(tiles) {
      let tile1 = tiles[0];
      let tile2 = tiles[1];
      this.tiles = this.tiles.filter((e) => e !== tile1 && e !== tile2)
      this.moves.push(tile1)
      this.moves.push(tile2)
      this.checkGame()
    },
    revert() {
      if (this.moves.length > 0) {
        this.tiles.push(this.moves[this.moves.length - 1])
        this.moves.pop()
        this.tiles.push(this.moves[this.moves.length - 1])
        this.moves.pop()
        this.checkGame()
      }
    },
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
    showHint() {
      this.isShowHint = true
    }
  },
  mounted() {
    this.checkGame();
  }
}
</script>

<template>
  <div>
    <Header @revert="revert" @showhint="showHint"/>
    <main class="" style="min-height: 100vh;">
      <Board :tiles="tiles" :chosen="chosen" :hint="hint" :show-hint="isShowHint" @choose="chooseTile"/>
    </main>
  </div>
</template>