<template>
    <button class="btn">
        <slot>
        </slot>
    </button>
</template>

<script >
export default {
    name: 'my-btn'
}
</script>

<style scoped>
.btn {
    padding: 5px;
    background: none;
    background-color: teal;
    border: 1px solid teal;
    cursor: pointer;

    transition: transform 0.2s, box-shadow 0.2s, color 0.2s;
}

.btn:hover {
    transform: scale(1.1);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.disabled_btn {
    background-color: darkgray;
    cursor: not-allowed;
}
</style>