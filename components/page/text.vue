<template>
    <p class="px-4 md:px-12 text-md md:text-xl">
        <slot />
    </p>
</template>

<script setup>

defineProps({
    title: String
})

</script>