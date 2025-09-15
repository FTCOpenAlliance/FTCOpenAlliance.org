<template>
    <div class="flex flex-col bg-black border-2 border-orange bg-opacity-50 p-6 md:p-10 gap-6">
        <p v-if="title" class="text-center text-2xl md:text-4xl font-bold text-orange">{{ title }}</p>
        <slot />
    </div>
</template>

<script setup>

defineProps({
    title: String
})

</script>