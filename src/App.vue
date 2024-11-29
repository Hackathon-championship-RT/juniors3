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
      Choosen: {
        src: "",
        index: 0
      },
      start: false
    }
  },
  methods: {
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
          :tiles="[{x:0,y:0.5,z:0,type: 0},
                   {x:1,y:0,z:0,type: 0},
                   {x:1,y:0,z:1,type: 0},
                   {x:1,y:0,z:2,type: 0},
                   {x:2,y:0,z:0,type: 0},
                   {x:1,y:1,z:0,type: 0},
                   {x:2,y:1,z:0,type: 0},
                   {x:2,y:1,z:1,type: 0},
                   {x:3,y:0.5,z:0,type: 0}]"
      />
    </main>
  </div>
</template>