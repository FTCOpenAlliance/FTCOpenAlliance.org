<template>
    <div class="flex justify-between w-full">
        <p class="font-bold">{{ name }}</p>
        <p>{{ val }}</p>
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