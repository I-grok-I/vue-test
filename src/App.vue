<template>
    <div>
        <div style="margin: auto; color: whitesmoke;">
            <strong> Hello, World! </strong>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTelegram } from './services'
import { onMounted } from 'vue';
const { showMainButton, hideMainButton, setButtonLoader, expand, getViewportHeight, vibrate } = useTelegram()



onMounted(() => {
    expand()
    showMainButton('Hello, world', () => {
        console.log('Hello, world')
    })
})


</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>