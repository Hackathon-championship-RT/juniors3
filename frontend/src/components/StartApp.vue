<template>
    <main class="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-indigo-200 to-indigo-500"
        style="min-height: 100vh;">
        <div>
            <div class="p-5 rounded-xl border-black border-2">
                <div class="text-center pb-5 pt-3">
                    <h2>Добро пожаловать в Mahjong!
                        <br>(Версия с марками авто)
                    </h2>
                </div>
                <div class="flex justify-center pb-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        @click="$emit('start')">
                        Запуск игры
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        Start() {

        }
    }
}
</script>
