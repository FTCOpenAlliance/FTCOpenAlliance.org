<template lang="">
    <div>
        <PageTitle>
            <div class="text-center">
                <h1 class="text-6xl md:text-8xl text-orange font-bold">
                    {{ teamid }}
                </h1>
                <p class="text-2xl md:text-4xl">
                    [Team Name]
                </p>
            </div>
        </PageTitle>
    </div>
</template>
<script setup>
    const { teamid } = useRoute().params
</script>
<style lang="">
    
</style>