<template>
    <div class="min-h-screen flex items-center bg-gray-100 flex-col">
        <button type="button" @click="$emit('leaderBoard')" style="width:50%"
            class="mt-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5">
            Назад
        </button>
        <div class="flex flex-col justify-center items-center bg-red-400 mr-5 ml-2">
            <p class="text-white text-xl font-serif mb-5">LeaderBoard: Hard level</p>
            <div class="flex flex-row gap-5 mr-2 ml-2">
                <p class="text-white text-md w-40">Имя</p>
                <p class="text-white text-md w-26">Время</p>
                <p class="text-white text-md w-26">Количество помешиваний</p>
            </div>
            <div v-for="player in players" class="flex flex-row justify-between  mr-2">
                <p class="text-white text-md w-40">{{ player.name }}</p>
                <p class="text-white text-md w-32">{{ player.time }}</p>
                <p class="text-white text-md w-26">{{ player.score }}</p>
            </div>

        </div>
    </div>
</template>

<script>
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
        };
    },
};
</script>

<style scoped></style>