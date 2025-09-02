<template>
    <div class="float p-10 md:p-24 h-full w-full bg-grid">

        <div class="sm:p-36 p-12 backdrop-blur-sm shadow-xl shadow-orange">
            <h1 class="text-8xl sm:text-9xl font-bold text-orange h-auto">{{ error?.statusCode }}</h1>
            <h2 class="text-xl sm:text-3xl">{{ error?.statusMessage || '' }}</h2>
            <details class="mt-5">
                <summary class="text-lg text-orange cursor-pointer">Advanced</summary>
                <p class="mt-5 text-orange-600">{{ error?.stack || '' }}</p>
            </details>
            <UButton class="mt-10 rounded-none text-lg" label="Back to Home" to="/"/>
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