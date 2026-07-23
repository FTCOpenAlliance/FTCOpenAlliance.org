<template>
    <div class="flex flex-col pointer-events-none">
        <div class="p-5 bg-linear-to-b from-(--color-primary-950) to-transparent">
            <div class="flex justify-between items-center gap-4 p-5 pointer-events-auto bg-glass shadow-lg shadow-primary-800 border border-primary">
                <div class="flex gap-2">
                    <NuxtLink to="/">
                        <img src="/public/images/OALogos/ShortHorizontal.svg" class="h-8" />
                    </NuxtLink>
                    <ClientOnly>
                        <USeparator v-if="logoLink" orientation="vertical" class="h-8" />
                        <NuxtLink v-if="logoLink" :to="`/${program.toLowerCase()}`">
                            <img :src="logoLink" class="h-8" />
                        </NuxtLink>
                    </ClientOnly>
                </div>
                <UPopover class="xl:hidden" :popper="{placement: 'bottom-end'}">
                    <UButton size="lg" variant="ghost" icon="i-heroicons-bars-3-16-solid" />
            
                    <template #content>
                        <div class="p-4 bg-glass">
                            <NavigationButtons :program="program" class="flex-col *:*:text-lg"/>
                        </div>
                    </template>
                </UPopover>
                <NavigationButtons :program="program" class="hidden xl:flex" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs';

const program = useState('program', Program.Generic);
let logoLink = computed(() => {
    switch (program.value) {
        case Program.FTC:
            return '/images/FTCOALogos/ShortHorizontal.svg'
        case Program.FRC:
            return '/images/FRCOALogos/ShortHorizontal.svg'
        default:
            return null;
    }
});

</script>