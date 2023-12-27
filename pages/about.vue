<template>
    <div>
        <h2>
            About
        </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magni excepturi sed provident! Fuga laboriosam ratione numquam aperiam doloribus reiciendis.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magni excepturi sed provident! Fuga laboriosam ratione numquam aperiam doloribus reiciendis.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/USD')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin-bottom: 20px;
        font-size: 18px;
    }
</style>