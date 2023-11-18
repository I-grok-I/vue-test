<template>
    <div>
        <div style="margin: auto; color: whitesmoke;">
            <strong> Hellooo, World! </strong>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTelegram } from './services'
import { onMounted } from 'vue';
const { showMainButton, hideMainButton, colorScheme, expand, getViewportHeight } = useTelegram()



onMounted(() => {

    showMainButton('Hello, world', () => {
        hideMainButton()
    })
})


</script>

<style>
body {
    margin: 0;
    display: flex;
    min-width: 320px;
    min-height: 100vh;
    background-color: var(--color-bg-secondary);
}

.app {
    color: var(--color-text);
    position: relative;
    user-select: none;
}
</style>