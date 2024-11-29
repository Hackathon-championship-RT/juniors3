<script>
import StartApp from '../src/components/StartApp.vue'
export default {
  components: {
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
        if (this.Choosen.src == tile.src) {
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
  <start-app v-if="!start" @start="Start()"></start-app>
  <div class="bg-[url('../src/assets/fone.png')]" v-if="start">
    <header
      class="flex justify-around content-center h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
      <p class="text-white mt-1 hover:cursor-pointer">Выбрать уровень</p>
      <p class="text-white mt-1 hover:cursor-pointer">Начать сначала</p>
      <p class="text-white mt-1 hover:cursor-pointer">Обновить поле</p>
      <p class="text-white mt-1 hover:cursor-pointer">Подсказка</p>
      <p class="text-white mt-1 hover:cursor-pointer">Таймер</p>
    </header>
    <main class="" style="min-height: 100vh;">
      <div class="relative">
        <img src="../src/assets/bmw.png" @click="console.log(1)" class="absolute top-0 left-0 z-10 w-10">
        <img src="../src/assets/bmw.png" @click="console.log(1)" class="absolute top-0 left-8 z-0 w-10">
      </div>
    </main>
  </div>
</template>