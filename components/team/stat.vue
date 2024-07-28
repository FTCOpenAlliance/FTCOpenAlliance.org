<template>
    <div class="pb-10">
        <div class="flex flex-col sm:flex-row justify-between sm:border-b">
            <p class="text-xl md:text-3xl pb-2 text-center sm:text-start">{{ name }}</p>
            <p class="text-2xl sm:max-w-[50%] md:text-3xl text-orange font-bold pb-2 text-center sm:text-end"> {{ val }}</p>
        </div>
    </div>
</template>

<script setup>

defineProps({
    name: String,
    val: String,
})

</script>

<style lang="scss" scoped>

</style>