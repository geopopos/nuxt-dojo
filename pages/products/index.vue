<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard 
                :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products',
    })

    // fetch products from API
    const { data: products } = await useFetch('https://fakestoreapi.com/products')


    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            { name: 'description', content: 'Nuxt Dojo Merch' },
            { name: 'keywords', content: 'nuxt, dojo, merch'},
        ]

    })

</script>