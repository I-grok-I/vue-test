<template>
    <div>
        <div>
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
            <p>{{ lastUpdated }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
    task: {
        type: Object,
        required: true
    }
})

const lastUpdated = computed(() => new Date(task.last_updated).toLocaleDateString())

</script>

<style lang="scss" scoped></style>