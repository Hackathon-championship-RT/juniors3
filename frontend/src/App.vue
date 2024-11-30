<script>
import Header from "@/components/Header.vue";
import Board from "@/components/Board.vue";
import FigureService from "@/services/FigureService.js";
import Lose from "./components/Lose.vue";
import Win from "./components/Win.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import axios from "axios";
import Rnd from "@/services/Rnd.js";

export default {
  components: {
    Board,
    Header,
    Lose,
    Win,
    LeaderBoard
  },
  data() {
    return {
      tiles: [{ x: 0, y: 0, z: 0, type: 0 },
      { x: 1, y: 0, z: 0, type: 1 },
      { x: 0, y: 1, z: 0, type: 0 },
      { x: 0, y: 0, z: 1, type: 1 }],
      deleted: [],
      moves: [],
      start: false,
      chosen: undefined,
      gameStatus: "game",
      hint: [],
      isShowHint: false,
      countReshuffles: 0,
      isLeaderBoard: false
    }
  },
  methods: {
    checkGame() {
      this.chosen = undefined
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
      this.deleted.push(tile1)
      this.deleted.push(tile2)
      this.checkGame()
    },
    revert() {
      if (this.deleted.length > 0) {
        this.tiles.push(this.deleted[this.deleted.length - 1])
        this.deleted.pop()
        this.tiles.push(this.deleted[this.deleted.length - 1])
        this.deleted.pop()
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
    },
    startNewGame() {
      this.tiles = FigureService.getTurtle("easy")
      this.deleted = []
      this.checkGame()
    },
    revertGame() {
      for (const tile of this.deleted) {
        this.tiles.push(tile)
      }
      this.deleted = []
      this.checkGame()
    },
    reshuffle() {
      const types = this.tiles.map((e) => e.type)
      Rnd.shuffle(types)
      this.tiles = this.tiles.map((e, index) => {
        return { ...e, type: types[index] }
      })
      this.countReshuffles++
      this.checkGame()
    },
    LeaderBoard() {
      this.isLeaderBoard = !this.isLeaderBoard
    },
    async SendName() {
      console.log('next-get')
      await axios.get('add_result', {
        params: {
          name: localStorage.getItem('nickname'),
          time: localStorage.getItem('time'),
          reshuffles: this.countReshuffles,
          difficulty: "hard"
        }
      },
        console.log('send'))
    }
  },
  mounted() {
    this.checkGame();
  }
}
</script>

<template>
  <div>
    <div v-if="this.gameStatus !== 'game' || isLeaderBoard"
      style="z-index: 2000000000;position: fixed;left: 0;top: 0;width: 100%;opacity: 50%;min-height: 100vh;"
      class="bg-gray-900 ">
    </div>
    <Header @revert="revert" @showhint="showHint" @restart="startNewGame" @update="revertGame"
      @leaderBoard="LeaderBoard()" @reshuffle="reshuffle" />
    <main class="flex justify-center items-center"
      style="min-height: 100vh;position: absolute;left: 0;top: 0;width: 100%">
      <Lose v-if="gameStatus === 'lose'" style="z-index: 2000000001;" @revert="revert" @update="revertGame"
        @restart="startNewGame" @reshuffle="reshuffle" />
      <Win v-if="gameStatus === 'win'" style="z-index: 2000000001;" @update="revertGame" @restart="startNewGame"
        @send="SendName" />
      <Board :tiles="tiles" :chosen="chosen" :hint="hint" :show-hint="isShowHint" @choose="chooseTile" />
      <LeaderBoard v-if="isLeaderBoard" style="z-index: 2000000001;" />
    </main>
  </div>
</template>

<style scoped></style>
