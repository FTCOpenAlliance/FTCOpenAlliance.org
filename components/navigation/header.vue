<template>
    <div class="flex flex-col absolute pointer-events-none md:fixed top-0 bottom-0 z-50 left-0 right-0">
        <div :hidden="!bannerHTML" class="flex flex-col pointer-events-auto gap-2 items-center z-60 p-2 bg-primary-600">
            <p class="text-sm text-center" v-html="bannerHTML" />
        </div>
        <div class="p-5 bg-linear-to-b from-black to-transparent">
            <div class="flex justify-between items-center gap-4 p-5 pointer-events-auto bg-glass shadow-lg shadow-primary-800 border border-primary">
                <div class="max-w-48 md:max-w-36">
                    <NuxtLink to="/">
                        <img src="/public/images/FTCOALogos/ShortHorizontal.svg">
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
    </div>
</template>

<script setup>

    let bannerHTML = useState('flags').value ? useState('flags').value.BannerHTML : ''

</script>