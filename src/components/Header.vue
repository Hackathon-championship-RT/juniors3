<script>
export default {
  name: "Header",
  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
    }
  },
  methods: {
    timer() {
      console.log(1321)
      if (this.sec < 60) {
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
      }
    },
  },
  mounted() {
    setInterval(this.timer, 1000);
  }
}
</script>

<template>
  <header class="flex justify-around content-center h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
    <p class="text-white mt-1 hover:cursor-pointer">Выбрать уровень</p>
    <p class="text-white mt-1 hover:cursor-pointer">Начать сначала</p>
    <p class="text-white mt-1 hover:cursor-pointer">Обновить поле</p>
    <p class="text-white mt-1 hover:cursor-pointer">Подсказка</p>
    <p class="text-white mt-1 hover:cursor-pointer" @click="$emit('revert')">Отмена хода</p>
    <p class="text-white mt-1 hover:cursor-pointer">{{ hour }}:{{ min }}:{{ sec }}</p>
  </header>
</template>

<style scoped></style>