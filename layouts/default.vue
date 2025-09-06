<script setup lang="ts">
//import { NavigationHeader } from '#build/components';
</script>

<template>
    <div>
        <div>
            <NuxtLoadingIndicator :height="2" color="#ff6600"/>
            <NavigationHeader />
        </div>
        <div>
            <UNotifications color="orange" class="*:*:bg-[#00000066] *:*:backdrop-blur-sm *:*:border-2 *:*:border-orange"/>
                <slot/>
        </div>
        <div>
            <PageFooter />
        </div>
    </div>
</template>

<style  scoped>

</style>