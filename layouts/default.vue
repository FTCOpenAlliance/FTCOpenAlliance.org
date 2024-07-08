<script setup lang="ts">
//import { NavigationHeader } from '#build/components';
</script>

<template>
    <div>
        <div>
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