<template>
    <div class="flex p-10 md:p-24 h-screen w-screen items-center justify-center bg-red-950">

        <div class="flex grow items-center gap-8 sm:p-36 p-12 bg-black/50 border-8 border-red-500">
            <img src="/public/images/OALogos/Icon.svg" class="saturate-0"/>
            <div class="flex flex-col grow gap-2">
                <h1 class="text-8xl sm:text-9xl font-bold text-red-500 h-auto">{{ error?.statusCode }}</h1>
                <h2 class="text-xl sm:text-3xl">{{ error?.statusMessage || '' }}</h2>
                <UButton class="mt-10 text-lg" label="Back to Home" to="/"/>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

</script>

<style scoped>

</style>