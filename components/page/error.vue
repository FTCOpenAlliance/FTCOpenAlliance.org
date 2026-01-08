<template>
    <div class="flex gap-4 justify-center items-center flex-col lg:flex-row p-12">
        <Icon name="i-ic-outline-error-outline" class="text-8xl text-primary"/>
        <div class="flex flex-col gap-2 lg:my-8">
            <p class="text-3xl text-center lg:text-left">{{ errortext }}</p>
            <p class="text-xl text-gray-500 text-center lg:text-left">{{ errormessage }}</p>
        </div>
    </div>
</template>

<script setup>

    defineProps({
        errortext: String,
        errormessage: String,
    })

</script>