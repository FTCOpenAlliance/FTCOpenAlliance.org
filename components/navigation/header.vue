<template>
    <div class="p-5 absolute md:fixed top-0 z-50 left-0 right-0 bg-gradient-to-b from-black to-transparent">
        <div class="flex justify-between items-center gap-4 p-5 backdrop-blur shadow-lg shadow-orange-800 border border-orange">
            <div class="max-w-48 md:max-w-36">
                <NuxtLink to="/">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
                </NuxtLink>
            </div>
            <UPopover class="md:hidden *:mr-2 *:*:*:rounded-none *:*:*:border-2 *:*:*:border-orange" :popper="{placement: 'bottom-end'}">
                <UButton class="*:size-8" variant="ghost" icon="i-heroicons-bars-3-16-solid" />
                
                <template #panel>
                    <div class="rounded-none p-4 bg-[#000000aa] backdrop-blur-sm">
                        <NavigationButtons class="flex-col *:*:text-lg"/>
                    </div>
                </template>
            </UPopover>
            <NavigationButtons class="hidden md:flex" />
        </div>
    </div>
</template>

<script>
import Headerbuttons from './buttons.vue';

export default {
    setup () {
        
        
        return {}
    }
}
</script>

<style scoped>

</style>