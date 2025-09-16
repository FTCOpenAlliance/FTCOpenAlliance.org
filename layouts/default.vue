<script setup lang="ts">
//import { NavigationHeader } from '#build/components';
</script>

<template>
    <UApp>
        <div>
            <div>
                <NuxtLoadingIndicator :height="2" color="#ff6600"/>
                <NavigationHeader />
            </div>
                <slot/>
            <div>
                <PageFooter />
            </div>
        </div>
    </UApp>
</template>

<style  scoped>

</style>