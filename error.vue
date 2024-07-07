<template>
    <div class="float p-10 md:p-24 h-screen w-screen bg-[linear-gradient(to_right,#ff660044_1px,transparent_1px),linear-gradient(to_bottom,#ff660022_1px,#000_1px)] bg-[size:40px_40px]">

        <div class="sm:p-36 p-12 backdrop-blur-sm shadow-xl shadow-orange">
            <h1 class="text-8xl sm:text-9xl font-bold text-orange h-auto">{{ error.statusCode }}</h1>
            <h2>{{ error.statusMessage }}</h2>
            <UButton class="mt-10" label="Back to Home" to="/"/>
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