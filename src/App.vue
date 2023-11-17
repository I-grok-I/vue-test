<template>
    <div>
        Привет!!!
    </div>
</template>

<script setup lang="ts">
import { useTelegram } from '@/services'
import { onMounted } from 'vue';
const { showMainButton, hideMainButton, setButtonLoader, expand, getViewportHeight, vibrate } = useTelegram()



onMounted(() => {
    expand()
})


</script>

<style scoped></style>