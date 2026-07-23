<template>

    <ClientOnly>
        <div ref="bannerContainer" :class="(flags.BannerMD && !dismissed) ? 'bg-primary-600 h-8' : 'bg-primary-300 h-0 *:text-[0px]'" class="flex gap-2 pointer-events-auto overflow-hidden z-60 transition-all duration-750">
            <UButton @click="dismissed = true" size="md" variant="solid" class="z-1 h-full text-white bg-primary-600 hover:bg-primary-900 hover:text-primary-500" icon="i-heroicons-x-mark"/>
            <div ref="bannerText" class="flex grow justify-center-safe overflow-none items-center transition-none" :class="bannerOverflow ? 'animate-marquee' : ''">
                <Comark class="**:my-0 **:text-sm **:text-nowrap" :markdown="flags.BannerMD" />
            </div>
        </div>
    </ClientOnly>

</template>

<script setup>
import { useElementBounding } from '@vueuse/core';

const flags = useState('flags');
const dismissed = useState('bannerDismissed', () => false);

    const containerWidth = useElementBounding(useTemplateRef('bannerContainer')).width;
    const textWidth = useElementBounding(useTemplateRef('bannerText')).width;

const bannerOverflow = computed(() => {
    return textWidth.value > containerWidth.value;
})

</script>

<style scoped>

.animate-marquee {
    animation: marquee 15s linear infinite;
}

@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-150%); }
}

</style>