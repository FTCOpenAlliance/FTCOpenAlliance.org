<template>
    <div>
        <div class="flex justify-center items-center h-screen">
            <h1 class="text-xl sm:text-4xl lg:text-6xl">Fetching Team Data...</h1>
            
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})

    navigateTo('/teams')

// const link = useRoute().query.link?.toString()
// window.console.log(link)

</script>


<style>

</style>