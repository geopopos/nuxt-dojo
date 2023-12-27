<template>
    <div class="card text-center">
        <img :src="product.image" class="thumb" />
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>

        <NuxtLink :to="`/products/${product.id}`">
                <p class="btn">View Item</p>
            </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style lang="css" scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>