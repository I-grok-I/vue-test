<template>
    <div class="app">
        <AppearanceProvider>
            <Switch />
            <RadioButton />
        </AppearanceProvider>
    </div>
</template>

<script setup lang="ts">
import { useTelegram } from './services'
import { onMounted } from 'vue';
import { AppearanceProvider, Switch, RadioButton } from '@erfanmola/televue';
import '@erfanmola/televue/style.css';
import WebApp from '@twa-dev/sdk';
const { showMainButton, hideMainButton, showAlert, showBackButton } = useTelegram()


onMounted(() => {

    const colors = ['red', 'green', 'yellow', 'blue', 'magenta']

    showMainButton('Hello, world', () => {
        const color: string = colors[Math.ceil(Math.random() * colors.length - 1)]

        const element = document.getElementById('body') as HTMLElement;
        element.style.backgroundColor = color;

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