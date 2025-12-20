<template>
    <div class="flex flex-col absolute pointer-events-none md:fixed top-0 bottom-0 z-50 left-0 right-0">
        <ClientOnly>
            <div :class="flags.BannerHTML ? 'bg-primary-600 h-8' : 'bg-primary-300 h-0'" class="flex flex-col pointer-events-auto items-center justify-center z-60 transition-all duration-750">
                <p :class="flags.BannerHTML ? 'text-sm' : 'text-[0px]'" class="text-center transition-all duration-500" v-html="flags.BannerHTML" />
            </div>
        </ClientOnly>
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
const flags = useState('flags');
</script>