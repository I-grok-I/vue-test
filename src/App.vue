<template>
    <div class="app">
        <div>
            <strong> Hellooo, World! </strong>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTelegram } from './services'
import { onMounted } from 'vue';
const { showMainButton, hideMainButton, showAlert, showBackButton } = useTelegram()



onMounted(() => {


    showMainButton('Hello, world', () => {

        showAlert('aAaa.')
    })

})


</script>

<style>
body {
    background-color: rgb(27, 55, 66);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    /* margin: ; */
    display: flex;
    color: var(--color-text);
    position: relative;
    user-select: none;
    background-color: gray;
}
</style>