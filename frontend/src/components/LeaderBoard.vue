<template>
    <div class="flex flex-col items-center">
        <div>
            <button type="button" @click="$emit('leaderBoard')" style="width:200px;"
                class="mt-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5">
                Назад
            </button>
        </div>
        <div class="flex justify-between">
            <div class="min-h-screen flex items-center flex-col">

                <div class="flex flex-col justify-center items-center bg-red-400 mr-5 ml-2 border-red-500 border-4">
                    <p class="text-white text-xl font-serif mb-5">LeaderBoard: Hard level</p>
                    <div class="flex flex-row gap-5 mr-2 ml-2">
                        <p class="text-white text-md w-40">Имя</p>
                        <p class="text-white text-md w-26">Время</p>
                        <p class="text-white text-md w-26">Перемешивания</p>
                    </div>
                    <div v-for="player in players" class="flex flex-row justify-between  mr-2 ml-2 mb-2 "
                        style="border-top: 1px black solid;width: 100%;">
                        <p class="text-white text-md w-40">{{ player.name }}</p>
                        <p class="text-white text-md w-32">{{ player.time }}</p>
                        <p class="text-white text-md w-26">{{ player.score }}</p>
                    </div>

                </div>
            </div>
            <div class="min-h-screen flex items-center flex-col">
                <div class="flex flex-col justify-center items-center bg-red-400 mr-5 ml-2 border-red-500 border-4">
                    <p class="text-white text-xl font-serif mb-5">LeaderBoard: Medium level</p>
                    <div class="flex flex-row gap-5 mr-2 ml-2">
                        <p class="text-white text-md w-40">Имя</p>
                        <p class="text-white text-md w-26">Время</p>
                        <p class="text-white text-md w-26">Перемешивания</p>
                    </div>
                    <div v-for="player in players" class="flex flex-row justify-between  mr-2 ml-2 mb-2 "
                        style="border-top: 1px black solid;width: 100%;">
                        <p class="text-white text-md w-40">{{ player.name }}</p>
                        <p class="text-white text-md w-32">{{ player.time }}</p>
                        <p class="text-white text-md w-26">{{ player.score }}</p>
                    </div>

                </div>
            </div>
            <div class="min-h-screen flex items-center flex-col">
                <div class="flex flex-col justify-center items-center bg-red-400 mr-5 ml-2 border-red-500 border-4">
                    <p class="text-white text-xl font-serif mb-5">LeaderBoard: Easy level</p>
                    <div class="flex flex-row gap-5 mr-2 ml-2">
                        <p class="text-white text-md w-40">Имя</p>
                        <p class="text-white text-md w-26">Время</p>
                        <p class="text-white text-md w-26">Перемешивания</p>
                    </div>
                    <div v-for="player in players" class="flex flex-row justify-between  mr-2 ml-2 mb-2 "
                        style="border-top: 1px black solid;width: 100%;">
                        <p class="text-white text-md w-40">{{ player.name }}</p>
                        <p class="text-white text-md w-32">{{ player.time }}</p>
                        <p class="text-white text-md w-26">{{ player.score }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LeaderBoard",
    data() {
        return {
            players: [
                { name: "Player 1", score: "100", time: 1 },
                { name: "Player 2", score: "200", time: 2 },
                { name: "Player 3", score: "150", time: 3 },
                { name: "Player 4", score: "120", time: 4 },
                { name: "Player 5", score: "180", time: 5 },
                { name: "Player 6", score: "140", time: 6 },
            ],
            hard: [],
            middle: [],
            easy: []
        };
    },
    methods: {
        async getHard() {
            let response = await axios.get('/hard')
            this.hard = response.data
        },
        async getMiddle() {
            let response = await axios.get('/middle')
            this.middle = response.data
        }, async getEasy() {
            let response = await axios.get('/easy')
            this.easy = response.data
        }
    }
};
</script>

<style scoped></style>