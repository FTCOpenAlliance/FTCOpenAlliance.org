<template>
    <div v-if="error" class="flex gap-4 justify-center items-center flex-col md:p-24 p-12">
        <Icon name="i-ic-outline-error-outline" class=" text-8xl text-primary"/>
        <p class="text-3xl text-center">{{ errortext }}</p>
        <p class="text-xl text-gray-500 text-center">{{ errormessage }}</p>
    </div>
</template>

<script setup>

    defineProps({
        error: Boolean,
        errortext: String,
        errormessage: String,
    })

</script>