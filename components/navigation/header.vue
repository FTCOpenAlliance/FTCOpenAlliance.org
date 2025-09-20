<template>
    <div class="p-5 absolute pointer-events-none md:fixed top-0 z-50 left-0 right-0 bg-linear-to-b from-black to-transparent">
        <div class="flex justify-between items-center gap-4 p-5 pointer-events-auto bg-glass shadow-lg shadow-primary-800 border border-primary">
            <div class="max-w-48 md:max-w-36">
                <NuxtLink to="/">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
                </NuxtLink>
            </div>
            <UPopover class="lg:hidden" :popper="{placement: 'bottom-end'}">
                <UButton class="*:size-8" variant="ghost" icon="i-heroicons-bars-3-16-solid" />
                
                <template #content>
                    <div class="p-4 bg-glass">
                        <NavigationButtons class="flex-col *:*:text-lg"/>
                    </div>
                </template>
            </UPopover>
            <NavigationButtons class="hidden lg:flex" />
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        
        
        return {}
    }
}
</script>

<style scoped>

</style>