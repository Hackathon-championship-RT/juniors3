<script>
export default {
  name: "Header",
  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
      time: 0,
    }
  },
  methods: {
    timer() {
      if (this.sec < 59) {
        this.sec += 1
      } else {
        this.sec = 0;
        if (this.min < 60) {
          this.min += 1
        } else {
          this.min = 0;
          if (this.hour < 24) {
            this.hour += 1
          }
        }
      };
      this.time += 1
      window.localStorage.setItem('time', this.time);
    },
  },
  mounted() {
    setInterval(this.timer, 1000);
  }
}
</script>

<template>
  <header class="flex justify-around content-center h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
    style="z-index: 2; position: absolute; width: 100%">
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('restart')">Выбрать уровень</p>
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('update')">Начать сначала</p>
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('reshuffle')">Перемешать</p>
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('showhint')">Подсказка</p>
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('revert')">Отмена хода</p>
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('leaderBoard')">LeaderBoard</p>
    <p class="text-white mt-1 hover:cursor-pointer">Время: <span v-if="hour">{{ hour }}:</span>{{ min }}:{{ sec }}</p>
  </header>
</template>

<style scoped></style>