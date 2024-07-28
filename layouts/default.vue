<script setup lang="ts">
//import { NavigationHeader } from '#build/components';
</script>

<template>
    <div>
        <div>
            <NuxtLoadingIndicator height="2" color="#ff6600"/>
            <NavigationHeader />
        </div>
        <div><slot/></div>
        <div>
            <PageFooter />
        </div>
    </div>
</template>

<style  scoped>

</style>