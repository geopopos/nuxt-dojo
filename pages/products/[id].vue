<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails 
        :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'products',
    })
    const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, {key: id})

    if (!product.value) {
        throw createError({
                statusCode: 404,
                statusMessage: 'Product not found',
                fatal: true,
            });
    }
</script>

<style lang="css" scoped>

</style>