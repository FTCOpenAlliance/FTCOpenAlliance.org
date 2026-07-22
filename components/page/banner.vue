<template>

    <ClientOnly>
        <div :class="(flags.BannerMD && !dismissed) ? 'bg-primary-600 h-8 p-1' : 'bg-primary-300 h-0 p-0 *:text-[0px]'" class="flex gap-2 pointer-events-auto overflow-hidden z-60 transition-all duration-750">
            <div ref="bannerText" class="flex grow justify-center-safe items-center transition-none" :class="bannerOverflow ? 'animate-marquee' : ''">
                <Comark class="**:my-0 **:text-sm **:text-nowrap" :markdown="flags.BannerMD" />
            </div>
            <UButton v-if="flags.BannerMD && !dismissed" @click="dismissed = true" size="md" variant="ghost" class="p-0 text-white hover:text-primary-200" icon="i-heroicons-x-mark"/>
        </div>
    </ClientOnly>

</template>

<script setup>

const flags = useState('flags');
const dismissed = useState('bannerDismissed', () => false);

const bannerText = useTemplateRef('bannerText');

const bannerOverflow = computed(() => {
    if (!bannerText.value) return false
    return bannerText.value?.offsetWidth < bannerText.value?.scrollWidth
})

</script>

<style scoped>

.animate-marquee {
    animation: marquee 15s linear infinite;
}

@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}

</style>