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
      Choosen: {
        src: "",
        index: 0
      },
      start: false
    }
  },
  methods: {
    FigureService() {
      return FigureService
    },
    Choose(tile) {

      if (this.Choosen.src) {
        if (this.Choosen.src === tile.src) {
          console.log('del')
        }
      }
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
      <Board
          :tiles="FigureService().turtle"
      />
    </main>
  </div>
</template>