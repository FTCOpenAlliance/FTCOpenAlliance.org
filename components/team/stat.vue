<template>
    <div>
        <div class="flex flex-col sm:flex-row py-2 gap-2 justify-between sm:border-b">
            <p class="text-xl md:text-2xl text-center sm:text-start">{{ name }}</p>
            <p v-if="!Array.isArray(val)" class="text-2xl sm:max-w-[50%] font-medium text-primary-400 text-center sm:text-end"> {{ val }}</p>
            <div v-if="Array.isArray(val)" class="flex flex-wrap justify-center sm:justify-end sm:max-w-[50%] gap-2">
                <UBadge v-for="item in val" :key="item" variant="outline" size="xl" class="text-xl text-primary-400">{{ item }}</UBadge>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    name: String,
    val: String | Array,
})

</script>

<style lang="scss" scoped>

</style>