<template>
    <div class="flex flex-col bg-glass border-2 border-primary-400 shadow-xl shadow-primary-400/25 p-6 md:p-10 gap-6">
        <p v-if="title" class="text-center text-2xl md:text-4xl font-bold text-primary-200">{{ title }}</p>
        <slot />
    </div>
</template>

<script setup>

defineProps({
    title: String
})

</script>