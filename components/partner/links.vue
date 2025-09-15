<template>
    <div class="flex flex-col gap-2 justify-center *:justify-center *:text-lg *:rounded-none *:mx-1 *:mb-2 sm:*:mb-0 hover:*:scale-105 *:transition-all">
        <UButton label="Website" :to="website" v-if="website" target="_blank" icon="i-heroicons-globe-alt"/>
        <UButton label="YouTube" :to="youtube" v-if="youtube" target="_blank" icon="i-mdi-youtube"/>
        <UButton label="Instagram" :to="instagram" v-if="instagram" target="_blank" icon="i-mdi-instagram"/>
        <UButton label="Facebook" :to="facebook" v-if="facebook" target="_blank" icon="i-mdi-facebook"/>
        <UButton label="Twitter/X" :to="twitter" v-if="twitter" targer="_blank" icon="i-mdi-twitter"/>
    </div>
</template>

<script setup>

defineProps({
    website: String,
    youtube: String,
    instagram: String,
    facebook: String,
    twitter: String,
})

</script>