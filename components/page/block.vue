<template>
    <div class="flex flex-col bg-glass border-2 border-primary p-6 md:p-10 gap-6">
        <p v-if="title" class="text-center text-2xl md:text-4xl font-bold text-primary">{{ title }}</p>
        <slot />
    </div>
</template>

<script setup>

defineProps({
    title: String
})

</script>